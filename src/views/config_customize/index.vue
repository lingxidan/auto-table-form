<template>
  <div class="customizeIdx">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="表格配置" name="excel">
        <!-- <draggable
          class="syllable_ul"
          element="ul"
          :list="syllable"
          :options="{ group: 'title', animation: 150 }"
          :no-transition-on-drag="true"
          @change="change"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'syll_li' : null"
            :css="true"
          >
            <li v-for="(item, idx) in syllable" :key="idx">{{ item.title }}</li>
          </transition-group>
        </draggable> -->
        <el-table :data="tableConfig" v-loading="tableConfigLoading">
          <el-table-column prop="label" label="表头文字">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.model == formData.model"
                :model="formData.label"
              ></el-input>
              <label v-else> {{ scope.row.label }}</label>
            </template>
          </el-table-column>
          <el-table-column prop="model" label="对应字段">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.model == formData.model"
                :model="formData.model"
              ></el-input>
              <label v-else> {{ scope.row.model }}</label>
            </template>
          </el-table-column>
          <el-table-column prop="width" label="宽度">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.model == formData.model"
                :model="formData.width"
              ></el-input>
              <label v-else> {{ scope.row.width }}</label>
            </template>
          </el-table-column>
          <el-table-column prop="fixed" label="固定位置">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.model == formData.model"
                :model="formData.fixed"
              ></el-input>
              <label v-else> {{ scope.row.fixed }}</label>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.model == formData.model"
                @click="handleClick({})"
                type="text"
                size="small"
              >
                取消
              </el-button>
              <el-button
                v-else
                @click="handleClick(scope.row)"
                type="text"
                size="small"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="表单配置" name="form">表单配置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Excel from "exceljs";
import draggable from "vuedraggable";
export default {
  name: "customizeIdx",
  data() {
    return {
      tableConfigLoading: false,
      activeName: "excel",
      tableConfig: [],
      syllable: [{ title: "1" }, { title: "3" }, { title: "2" }],
      drag: false,
      // 修改数据
      formEdit: false,
      formData: {},
      form: [
        {
          model: "label",
          type: "text",
        },
        {
          model: "model",
          type: "text",
        },
        {
          model: "width",
          type: "number",
        },
        {
          model: "fixed",
          type: "select",
          options: [
            {
              label: "left",
              value: "left",
            },
            {
              label: "right",
              value: "right",
            },
          ],
        },
      ],
    };
  },
  models: {},
  components: { draggable },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 解析表格文件
    readExcel(file) {
      let _this = this;
      let reader = new FileReader();
      this.tableConfigLoading = true;
      reader.onloadend = (event) => {
        let arrayBuffer = reader.result;
        let workbook = new Excel.Workbook();
        workbook.xlsx.load(arrayBuffer).then((workbook) => {
          let sheet = workbook.worksheets[0];
          let tableConfigs = [];
          let titleJoinIdx = 1;
          sheet.eachRow((row, rowNumber) => {
            if (rowNumber <= titleJoinIdx) {
              for (let valIdx in row.values) {
                let val = row.values[valIdx];
                if (
                  valIdx > 1 &&
                  tableConfigs[valIdx - 2].model == val + "" + (valIdx - 1)
                ) {
                  tableConfigs = [];
                  titleJoinIdx += 1;
                  break;
                }
                let rowLabel = val;
                if (val.richText) {
                  val.richText.forEach((a) => {
                    rowLabel += a.text;
                  });
                }
                tableConfigs.push({
                  model: rowLabel + "" + valIdx,
                  label: rowLabel,
                });
              }
            }
            _this.tableConfig = tableConfigs;
          });
          this.tableConfigLoading = false;
        });
      };
      reader.readAsArrayBuffer(file);
    },
    //evt里面有两个值，一个evt.added 和evt.removed  可以分别知道移动元素的ID和删除元素的ID
    change(evt) {
      console.log(evt, "change...", this.syllable);
    },
    // 修改数据
    handleClick(row) {
      console.log(row);
      this.formData = row;
    },
  },
  watch: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.customizeIdx {
}
</style>
