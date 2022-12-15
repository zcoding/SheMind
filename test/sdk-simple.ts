// simple sdk use case

import { createCanvas, createTopic, createRenderer, ERendererType } from '../core'

const canvas = createCanvas()

const topic1 = createTopic()

const topic2 = createTopic()

topic1.connect(topic2)

canvas.setMainTopic(topic1)

const renderer = createRenderer(ERendererType.DOM)

renderer.render(canvas)

renderer.mount(document.getElementById('canvas'))

// 监听鼠标悬停主题事件
canvas.on('hover-topic', (event) => {
  console.log(event.topic)
})

// 监听鼠标点击主题事件
canvas.on('click-topic', (event) => {
  console.log(event.topic)
})

// 监听鼠标点击画布事件
canvas.on('click-canvas', (event) => {
  console.log(event)
})

// 监听主题获取焦点事件
canvas.on('focus-topic', (event) => {
  console.log(event)
})

// 修改骨架
function setSkeleton(skeleton) {
  canvas.setSkeleton(sekleton)
}

// 修改画布属性
function setCanvasProps(props) {
  canvas.setProps(props)
}

// 修改配色方案
function setTheme(theme) {
  canvas.setTheme(theme)
}

// 修改主题形状
topic1.setShape({
  fillColor: '#FFEEDD',
  fillStyle: 'style1'
})

// 修改主题边框
topic1.setBorder({
  borderStyle: 'style2',
  borderColor: '#DDEEFF'
})

// 修改主题文本
topic1.setTextSetting({
  fontSize: 16
})

topic1.setText("主题1")

// 修改主题结构

// 修改主题分支