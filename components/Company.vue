<template>
  <div class="list">
    <div class="list-item">
      <div class="list-item-img">
        <img src="../src/img/company-logo.png" alt="" />
      </div>
      <div class="list-item-desc">
        <h2>{{ this.$props.company.title }}</h2>
        <p>{{ this.$props.company.description_short }}</p>
        <div class="list-item-desc-tags">
          <div
            class="list-item-desc-tags-item"
            v-for="tag in tags"
            :key="tag.id"
          >
            {{ tag.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data: function () {
    return {
      tags: [],
    };
  },

  //   methods: {},
  props: ["company"],
  mounted() {
    console.log(this.$props.company),
      (this.tags = this.$props.company.companySpecializations);
  },
};
</script>


<style lang="scss">
.list {
  .list-item {
    display: flex;
    padding: 32px;

    .list-item-img {
      width: 15%;
      margin-right: 22px;
      img {
        width: 100%;
      }
    }
    .list-item-desc {
      h2 {
        margin-top: 0;
        color: #030953;
      }
      .list-item-desc-tags {
        display: flex;
        .list-item-desc-tags-item {
          background: #f7f7f7;
          border-radius: 15px;
          padding: 5px 22px;
          margin-right: 4px;
        }
      }
    }
  }
  .list-item:hover {
    background: rgba(3, 9, 83, 0.03);
    border-radius: 8px;
    h2 {
      color: red;
    }
    .list-item-desc {
      .list-item-desc-tags {
        .list-item-desc-tags-item {
          background: #ffffff;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .list-item-desc-tags {
    flex-wrap: wrap;
  }
  .list {
 .list-item {
    flex-wrap: wrap;
    padding: 10px;
    .list-item-img {
      width: 100%;
      margin-right: 0;
    }
  }
  }
 
}
</style>