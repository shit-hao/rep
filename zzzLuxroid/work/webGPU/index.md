https://github.com/hjlld/LearningWebGPU
教程

概念：
GPUAdapter：
一个适配器代表了操作系统中一个 WebGPU 的实现。每个适配器标志着一个硬件加速器（例如 GPU 或 CPU）实例和一个浏览器在该硬件加速器之上对 WebGPU 的实现。

navigator.gpu
gpu 对象定义了 navigator.gpu 接口，它是 WebGPU 的入口。该对象暴露了 requestAdapter() 方法，用于获取适配器。

navigator.gpu.requestAdapter()
这个方法是一个异步函数，如果成功将返回一个 resolve 的 Promise<GPUAdapter> 对象；如果获取失败，将会返回一个 reject 的 Promise<DOMException("OperationError")> 对象。

这个方法接受一个类型为 GPURequestAdapterOptions 的参数，用于告诉浏览器，我们要获取一个什么样的显示适配器

核显，独显

enum GPUPowerPreference {
    "low-power",
    "high-performance"
};

注意：通常来说，如果内容不受绘制性能禁锢，应当使用低耗电的显示适配器；例如，如果每秒只渲染一帧，或者只使用简单的着色器绘制简单的几何体，或者 HTML canvas 元素的尺寸非常小。我们鼓励开发者在内容允许的情况下使用低耗电的显示适配器，因为它可以显著的改善移动设备的续航能力。

注意：如果选择了高性能的显示适配器，开发者应当注意，系统有可能基于省电的原因，迫使由此适配器创建的设备强制丢失。只有在开发者相信是绝对需要的情况下，才应当选择高性能的显示适配器，因为它会显著的降低移动设备的续航时间。

外接显卡？ 3个显卡

下面，我们利用刚刚获得的适配器对象，来获取了一个称为 GPUDevice 的对象。
public device: GPUDevice;
this.device = await this.adapter.requestDevice();
设备是一个适配器逻辑上实例化的过程，通过它创建了内部对象（internal objects）。它可以在多个 agent 中共享（例如专用 Worker）

requestDevice 获取一系列绘图用到的抽象硬件集合

注意：“agent” 指的是 JavaScript “线程”（例如主线程或者 Web Worker 线程）。

也就是说 GPU 设备是可以在多个线程中共享使用的，如果浏览器允许多个线程同时操作同一个 GPU 设备，那么这些操作要遵循原子操作原则。
原子操作

多个共享内存的线程能够同时读写同一位置上的数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作过程不会中断。

我们是通过 adapter.requestDevice() 方法获取到 GPU 设备的，尽管我们没有传参，但实际上这个函数是可以接受一个类型为 GPUObjectDescriptorBase 的参数的。

类似于获取 GPU 适配器，我们在获取 GPU 设备的时候，也可以指定我们需要什么样的设备。

GPUObjectDescriptorBase 有两个字段，一个是 extensions，用于指定当前绘制需要的扩展；另一个是 limits，用于指定获取最大支持什么样能力的设备。

设置渲染通道


GPUCommandEncoder 指令编码器

接下来，依然是 app.ts，让我们进入到一个全新的函数 InitRenderPass()。

RenderPass 的中文名字叫做“渲染通道”，你可以把他理解为我们用画笔画画时的一个工序，例如我们会先画草稿构图，然后绘制细节和光影，最后上色，这其中每个环节工序都可以认为是一个渲染通道。在渲染通道中，我们会进行具体的绘制工作，每个渲染通道结束，我们都会得到一幅图像。在复杂的 3D 应用中，最终呈现在显示器上的图像，往往是多个渲染通道组合迭代的结果。但是在本课中，因为我们只是简单地绘制一个三角形和一个正方形，所以我们只需要一个渲染通道就可以了。

在这个函数的开始，我们初始化了一个叫做 GPUCommandEncoder 的东西。
CommandEncoder 可以叫做指令编码器，它的作用是把你需要让 GPU 执行的指令写入到 GPU 的指令缓冲区（Command Buffer）中，例如我们要在渲染通道中输入顶点数据、设置背景颜色、绘制（draw call）等等，这些都是需要 GPU 执行的指令，所以在创建渲染通道之前，我们必须先创建一个指令编码器。

GPURenderPassEncoder 渲染通道编码器
设置完指令编码器，我们就可以创建一个渲染通道了。
this.renderPassEncoder.setViewport( 0, 0, this.canvas.clientWidth, this.canvas.clientHeight, 0, 1 );

其中 x 代表视口的左下角水平坐标，一般是 0； y 代表视口的左下角的垂直坐标，一般是 0；width 是视口的宽度；height 是视口的高速；minDepth 是最小的深度值，一般是 0；maxDepth 是最大深度值，一般是 1。

当一个渲染通道被建立时，WebGPU 会默认创建一个视口，其 x 和 y 都是 0, minDepth 是 0， maxDepth 是 1，而 width 和 height 则被设定为这个渲染通道的渲染目标的尺寸。

GPURenderPipeline 渲染管线

在 WebGPU 中，GPURenderPipeline 是由 GPUDevice 创建的，並被设定在 GPURenderPass 上的。

vertexStage 和 fragmentStage | 顶点着色器和片元着色器

GPUBindGroupLayout用于将资源绑定到 GPU，或者你可以通俗的理解为把资源从 CPU 端向 GPU 端输送，具体到语言，就是从 JavaScript 向 GLSL 4.5 输送。

我们使用渲染通道 drawIndexed() 接口来绘制三角形和方块。

由于现在 WebGPU 的着色器语言仍未最终确定，AAPL OR GOOG
如果你还记得上一课中，我们曾经提起过，现时的 WebGPU 实际上发生了分裂，一派以 Apple 为代表的使用基于文本的 WSL 语言作为着色器语言，另一派以 Google 为代表的使用 GLSL 4.5 并编译成二进制的 SPIR-V 作为着色器语言。

