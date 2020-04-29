<template>
  <div class="uploadFile">
    <el-upload
      ref="upload"
      class="upload-demo"
      drag
      action="#"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="fileChange"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将{{fileTip}}拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "uploadFile",
  data() {
    return {};
  },
  props: {
    fileTip: ""
  },
  components: {},
  mounted() {},
  methods: {
    fileChange(file) {
      this.$emit("fileChange", file);
    }
  }
};
</script>

<style lang="less" scoped>
.uploadFile {
  width: 100%;
  height: 100%;
  .upload-demo {
    width: 100%;
    height: 100%;
  }
}
</style>