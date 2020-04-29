import Vue from 'vue'

import {
  Dialog,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Tooltip,
  Icon,
  Loading,
  Message,
  MessageBox,
  Upload,
  Alert,
  Autocomplete,
  DatePicker,
  Link,
  Tree,
  Checkbox,
  Cascader,
  Tabs,
  TabPane,
} from 'element-ui'

Vue.use(Dialog);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Upload);
Vue.use(Alert);
Vue.use(Autocomplete);
Vue.use(DatePicker);
Vue.use(Link);
Vue.use(Tree);
Vue.use(Checkbox);
Vue.use(Cascader);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification;
Vue.prototype.$alert = MessageBox.alert;