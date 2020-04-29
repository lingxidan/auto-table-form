<template>
  <div class="main-config">
    <transition name="left-move" mode="out-in">
      <div v-if="!configVisible" class="mainIdx" key="upload">
        <div class="main-upload">
          <div class="upload upload-excel">
            <upload
              v-if="!excelFile.name"
              ref="uploadExcel"
              key="excel"
              :fileTip="excelTip"
              @fileChange="beforeUpload"
              class="upload-file"
            ></upload>
            <div v-else class="upload-info">
              <span>
                文件名:
                <label>{{ excelFile.name }}</label>
              </span>
              <span>
                文件大小:
                <label>{{ excelFile.size }}</label>
              </span>
              <el-button type="primary" @click="excelFile = {}"
                >重新上传</el-button
              >
            </div>
          </div>
          <div class="upload upload-java">
            <upload
              v-if="!javaFile.name"
              ref="uploadJava"
              key="java"
              :fileTip="javaTip"
              @fileChange="beforeUpload"
              class="upload-file"
            ></upload>
            <div v-else class="upload-info">
              <span>
                文件名:
                <label>{{ javaFile.name }}</label>
              </span>
              <span>
                文件大小:
                <label>{{ javaFile.size }}</label>
              </span>
              <el-button type="primary" @click="javaFile = {}"
                >重新上传</el-button
              >
            </div>
          </div>
        </div>
        <div class="cover">
          <div class="show" @click="showConfig">
            <!-- <transition name="fade" mode="out-in">
              <i v-if="configVisible" class="el-icon-d-arrow-right"></i>
              <i v-else class="el-icon-d-arrow-left"></i>
            </transition> -->
            <label v-if="configVisible">重新上传</label>
            <label v-else>开始配置</label>
          </div>
        </div>
      </div>
    </transition>
    <div class="customize">
      <div class="tag">
        <div class="show" @click="showConfig">
          <!-- <transition name="fade" mode="out-in">
              <i v-if="configVisible" class="el-icon-d-arrow-right"></i>
              <i v-else class="el-icon-d-arrow-left"></i>
            </transition> -->
          <i class="el-icon-d-arrow-right"></i>
          <label>重新上传</label>
        </div>
        <h1>表格表单自动化配置</h1>
      </div>
      <customize ref="customize"></customize>
    </div>
  </div>
</template>

<script>
import upload from "../../components/uploadFile";
import customize from "../config_customize/index";
export default {
  name: "mainIdx",
  data() {
    return {
      excelTip: "excel文件",
      javaTip: "java文件",
      excelFile: {
        name: "",
      },
      javaFile: {
        name: "",
      },
      rawExcel: {},
      rawJava: {},
      configVisible: false,
    };
  },
  props: {},
  components: { upload, customize },
  mounted() {},
  methods: {
    beforeUpload(file) {
      let _file = this.formatFileInfo(file);
      switch (file.name.split(".")[1]) {
        case "xlsx":
          this.excelFile = _file;
          break;
        case "java":
          this.javaFile = _file;
          break;
        default:
          this.$message.error("请选择文件");
          break;
      }
    },
    // 开始配置
    showConfig() {
      this.configVisible = !this.configVisible;
      if (this.excelFile.raw) {
        this.$refs.customize.readExcel(this.excelFile.raw);
      }
    },
    // 简化文件信息
    formatFileInfo(file) {
      let _file = {};
      _file.name = file.name;
      let size = file.size;
      if (size / 1024 > 1024) {
        _file.size = (size / 1024 / 1024).toFixed(2) + "M";
      } else {
        if (size > 1024) {
          _file.size = (size / 1024).toFixed(2) + "k";
        }
      }
      _file.type = file.raw.type;
      _file.raw = file.raw;
      return _file;
    },
  },
  watch: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.main-config {
  display: flex;
}
.mainIdx {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2010;
  display: flex;
  .main-upload {
    box-shadow: 0 0 1vh 0 #aaa;
    width: 30%;
    background-color: #efefff;
  }
  .upload {
    height: 50%;
    text-align: center;
  }
  .upload-info {
    position: relative;
    top: 10%;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 1.6vh;
      color: #aaa;
      line-height: 3vh;
      margin-bottom: 0.1vh;
      label {
        font-size: 1.8vh;
        color: #000;
      }
    }
  }
  .cover {
    flex: 1;
    .show {
      background-color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      left: 0;
      top: 0;
      font-size: 7vh;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      transition: 0.4s;
      label {
        cursor: pointer;
        margin-left: 0.2vw;
        transition: 0.4s;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        label {
          color: #409eff;
        }
      }
    }
  }
}
.customize {
  flex: 1;
  // max-width: 100%;
  padding: 0 3vh;
  .tag {
    text-align: center;
    line-height: 5vh;
    position: relative;
    .show {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1.6vh;
      label {
        cursor: pointer;
        margin-left: 0.2vw;
      }
    }
    h1 {
      font-size: 3vh;
      line-height: 7vh;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
.left-move-enter-active,
.left-move-leave-active {
  transition: all 0.5s;
}
.left-move-enter, .left-move-leave-to /* .left-move-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  width: 0;
  opacity: 0;
}
</style>
<style lang="less">
.main-config {
  .mainIdx {
    &::after {
      position: absolute;
      content: "";
      // height: ;
    }
    .el-upload-dragger {
      // border: 1px solid #d9d9d9;
      border-radius: 0;
      border: none;
      border-bottom: 0.1vh solid #ddd;
    }
  }
}
</style>
