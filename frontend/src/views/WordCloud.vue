/* eslint-disable */
<!-- <template>
    <div class="WordCloud">
        <h2>小词云</h2>
        <div id="word-text-area">
            <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea">
            </el-input>
            <div id="word-img">
                <el-image :src="getImageSrc()" :fit="fit">
                    <template #error>
                        <div class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </template>
                </el-image>
            </div>
            <div id="word-operation">
                <el-row>
                    <el-button type="primary" @click="onSubmit" round>生成词云</el-button>
                    <el-button type="success" @click="onDownload" round>下载图片</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WordCloudComponent',
  data () {
    return {
      textarea: '',
      pic: '',
      pageTitle: 'Flask Vue Word Cloud'
    }
  },
  methods: {
    onSubmit () {
      const param = {
        word: this.textarea
      }
      this.axios.post('/word/cloud/generate', param).then(
        res => {
          this.pic = res.data
          console.log(res.data)
        }
      ).catch(res => {
        console.log(res.data.res)
      })
    },
    onDownload () {
      const imgUrl = 'data:image/png;base64,' + this.pic
      const a = document.createElement('a')
      a.href = imgUrl
      a.setAttribute('download', 'word-cloud')
      a.click()
    },
    // 添加getImageSrc方法
    getImageSrc () {
      if (this.pic) {
        return `data:image/png;base64,${this.pic}`
      } else {
        return '' // 或者返回默认的占位图地址
      }
    }
  }
}
</script> -->

<!-- <template>
    <div class="WordCloudComponent">
        <h2>小词云</h2>
        <div id="word-text-area">
            <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
            <div id="word-img">
                <el-image :src="getImageSrc()" :fit="fit">
                    <template #error>
                        <div class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </template>
                </el-image>
            </div>
            <div id="word-operation">
                <el-row>
                    <el-button type="primary" @click="onSubmit" round>生成词云</el-button>
                    <el-button type="success" @click="onDownload" round v-if="pic">下载图片</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'WordCloudComponent',
  setup () {
    const textarea = ref('')
    const pic = ref('')
    const fit = 'fill' // 或者选择其他适合的图片适应方式

    async function onSubmit () {
      const param = {
        word: textarea.value
      }
      try {
        const res = await axios.post('/word/cloud/generate', param)
        pic.value = `data:image/png;base64,${res.data}`
      } catch (error) {
        console.log(error.response?.data)
      }
    }

    function onDownload () {
      const imgUrl = `data:image/png;base64,${pic.value}`
      const a = document.createElement('a')
      a.href = imgUrl
      a.setAttribute('download', 'word-cloud.png')
      document.body.appendChild(a) // 确保a标签存在于DOM中以触发点击事件
      a.click()
      document.body.removeChild(a) // 事件触发后移除a标签
    }

    function getImageSrc () {
      return pic.value ? `data:image/png;base64,${pic.value}` : ''
    }

    return {
      textarea,
      pic,
      fit,
      onSubmit,
      onDownload,
      getImageSrc
    }
  }
})
</script> -->

<!-- <template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template> -->

<template>
  <div class="WordCloudComponent">
    <h2>小词云</h2>
    <div id="word-text-area">
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
      <div id="word-img">
        <el-image :src="getImageSrc()" :fit="fit">
          <template #error>
            <div class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </template>
        </el-image>
      </div>
      <div id="word-operation">
        <el-row>
          <el-button type="primary" @click="onSubmit" round>生成词云</el-button>
          <el-button type="success" @click="onDownload" round v-if="pic">下载图片</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'WordCloudComponent',
  setup () {
    const textarea = ref('')
    const pic = ref('')

    // 图片适应方式
    const fit = 'fill'

    async function onSubmit () {
      const param = {
        word: textarea.value
      }
      try {
        const res = await axios.post('/word/cloud/generate', param)
        pic.value = `data:image/png;base64,${res.data}`
      } catch (error) {
        console.log(error.response?.data)
      }
    }

    function onDownload () {
      // const imgUrl = `data:image/png;base64,${pic.value}`
      const imgUrl = pic.value
      const a = document.createElement('a')
      a.href = imgUrl
      a.setAttribute('download', 'word-cloud.png')
      document.body.appendChild(a) // 确保a标签存在于DOM中以触发点击事件
      a.click()
      document.body.removeChild(a) // 事件触发后移除a标签
    }

    // 添加getImageSrc方法
    function getImageSrc () {
      // return pic.value ? `data:image/png;base64,${pic.value}` : ''
      return pic.value ? pic.value : ''
    }

    return {
      textarea,
      pic,
      fit,
      onSubmit,
      onDownload,
      getImageSrc
    }
  }
})
</script>
