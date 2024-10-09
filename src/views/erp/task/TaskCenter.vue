<template>
  <div class="task-center">
    <!-- <h1 class="tx-center">任务中心</h1> -->
    <!-- 调试输出 -->
    <div class="task-nav">
      <a-menu
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        :open-keys="state.openKeys"
        :items="items"
        @openChange="onOpenChange"
        class="task-menu"
      ></a-menu>
    </div>
  </div>
</template>

<script setup>
import { useNavigation } from '@/utils/routerUtils'; // 引入封装的路由工具
const { navigateTo } = useNavigation();
import { reactive, watch, h } from 'vue'; //h Vue 3 的 createElement 函数，用来创建虚拟 DOM 元素。通常用于 JSX 或手动渲染组件
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
const state = reactive({
  collapsed: false, //菜单是否处于收起状态
  selectedKeys: ['1'], //当前选中的菜单项的 key 数组，默认选中的是 key 为 1 的菜单项。
  preOpenKeys: ['sub1'],
});
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '统计',
    title: 'statistics',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: '我的任务',
    title: 'my-task',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: '设计模块',
    title: 'design-module',
  },
  {
    key: '4',
    icon: () => h(MailOutlined),
    label: '产品模块',
    title: 'product-module',
  },
  {
    key: '5',
    icon: () => h(MailOutlined),
    label: '开发模块',
    title: 'develop-module',
  },
  {
    key: '6',
    icon: () => h(MailOutlined),
    label: '需求模块',
    title: 'need-module',
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style scoped lang='stylus'>
.task-center {
  height: 100%;
  width: 100%;
  text-align: left;
  background-color: #f0f2f5;
}

.task-nav {
  width: 300px;
  height: 100%;
  background-color: #fff;
}

.task-menu {
  width: 300px;
}
</style>