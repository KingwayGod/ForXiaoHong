<template>
  <div>
    <a-button @click="playGames">点我</a-button>
  </div>
</template>

<script>
export default {
  name: 'game',
  data() {
    return {
      textTree: {
        content: '小红是猪吗？',
        ok: {
          content: '自己知道就好哈哈哈',
        },
        cancel: {
          content: '你自己是不是猪 自己不知道吗？再给你一次机会，是还是不是',
          ok: {
            content: '这还差不多',
          },
          cancel: {
            content: '那你是认为我是咯？',
            ok: {
              content: '你说是就是咯',
            },
            cancel: {
              content: '那你就是咯哈哈哈',
            },
          },
        },
      },
    };
  },
  methods: {
    playGames() {
      this.$confirm({
        title: '小红红红嘿嘿嘿',
        content: '开始游戏咯',
        okText: '快点开始吧',
        cancelText: '心情不好不玩',
        onOk: () => {
          this.recurrenceData(this.textTree);
        },
        onCancel() {},
      });
    },

    genNewConfirm(content, onOk, onCancel) {
      this.$confirm({
        title: '小红红红嘿嘿嘿',
        content: content,
        okText: '是的',
        cancelText: '不是',
        onOk: onOk,
        onCancel: onCancel,
      });
    },
    recurrenceData(data) {
      if (data.ok || data.cancel) {
        this.genNewConfirm(
          data.content,
          () => {
            this.recurrenceData(data.ok);
          },
          () => {
            this.recurrenceData(data.cancel);
          }
        );
      } else {
        this.genNewConfirm(data.content, () => {});
      }
    },
  },
};
</script>

<style></style>
