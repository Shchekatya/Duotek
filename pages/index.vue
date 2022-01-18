<template>
  <section>
    <aside>
      <div class="company-filter">
        <h3>Отрасль</h3>
        <div class="company-filter-industry" @click="isOpenI = !isOpenI">
          Вся отрасль
          <svg
            :class="{ rotate: isOpenI }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.42259 9.57741C7.09715 9.25197 6.56951 9.25197 6.24408 9.57741C5.91864 9.90285 5.91864 10.4305 6.24408 10.7559L11.2441 15.7559C11.5695 16.0814 12.0972 16.0814 12.4226 15.7559L17.4226 10.7559C17.748 10.4305 17.748 9.90285 17.4226 9.57741C17.0972 9.25197 16.5695 9.25197 16.2441 9.57741L11.8333 13.9882L7.42259 9.57741Z"
              fill="#030953"
            />
          </svg>
        </div>

        <div class="company-filter-industry-list" :class="{ open: isOpenI }">
          <div
            class="company-filter-industry-list-item"
            @click="filterIndustry(item.id)"
            v-for="item in items"
            :key="item.id"
          >
            {{ item.title }}
          </div>
        </div>
        <h3 class="m-top">Специализация</h3>
        <div class="company-filter-specialization" @click="isOpen = !isOpen">
          Все специализации
          <svg
            :class="{ rotate: isOpen }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.42259 9.57741C7.09715 9.25197 6.56951 9.25197 6.24408 9.57741C5.91864 9.90285 5.91864 10.4305 6.24408 10.7559L11.2441 15.7559C11.5695 16.0814 12.0972 16.0814 12.4226 15.7559L17.4226 10.7559C17.748 10.4305 17.748 9.90285 17.4226 9.57741C17.0972 9.25197 16.5695 9.25197 16.2441 9.57741L11.8333 13.9882L7.42259 9.57741Z"
              fill="#030953"
            />
          </svg>
        </div>
        <div
          class="company-filter-specialization-list"
          :class="{ open: isOpen }"
        >
          <div
            class="company-filter-specialization-list-item"
            @click="filterSpecialization(specialization.id)"
            v-for="specialization in specializations"
            :key="specialization.id"
          >
            {{ specialization.title }}
          </div>
        </div>
      </div>
    </aside>
    <main>
      <h1>Каталог компаний</h1>
      <div class="company">
        <div class="company-search">
          <form v-on:submit.prevent>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3145 17.176 15.7618L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.7618 17.176C14.3145 18.3183 12.4869 19 10.5 19ZM15.1598 15.0317C15.1368 15.0509 15.1145 15.0713 15.0929 15.0929C15.0713 15.1145 15.0509 15.1368 15.0317 15.1598C13.8609 16.2986 12.2624 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 12.2624 16.2986 13.8609 15.1598 15.0317Z"
                fill="#A7A7AB"
              />
            </svg>

            <input
              v-model="companySearch"
              type="text"
              placeholder="Поиск продукта или отрасли"
            />
            <button class="submit" @click="companySearchItem(companySearch)">
              Найти
            </button>
          </form>
        </div>

        <div class="company-result">
          <Company
            v-for="company in companies"
            :key="company.id"
            :company="company"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script >
export default {
  layout(context) {
    return "default";
  },

  data: function () {
    return {
      items: [],
      specializations: [],
      companies: [],
      companySearch: "",
      isOpen: false,
      isOpenI: false,
    };
  },

  methods: {
    filterIndustry(event) {
      this.$axios.get(`http://api-test.duotek.ru/companies`).then((r) => {
        this.companies = r.data.data.filter((e) =>
          e.industries.some((item) => item.id === event)
        );
      });
    },

    filterSpecialization(event) {
      this.$axios.get(`http://api-test.duotek.ru/companies`).then((r) => {
        this.companies = r.data.data.filter((e) =>
          e.companySpecializations.some((item) => item.id === event)
        );
      });
    },
    companySearchItem(value) {
      this.$axios.get(`http://api-test.duotek.ru/companies`).then((r) => {
        this.companies = r.data.data.filter((e) => {
          return e.title.indexOf(this.companySearch) !== -1;
        });
      });
    },
  },

  mounted() {
    this.$axios.get(`http://api-test.duotek.ru/definitions`).then((r) => {
      this.items = r.data.Industry;
    });
    this.$axios.get(`http://api-test.duotek.ru/definitions`).then((r) => {
      this.specializations = r.data.CompanySpecialization;
    });
    this.$axios.get(`http://api-test.duotek.ru/companies`).then((r) => {
      this.companies = r.data.data;
    });
  },
};
</script>

<style lang="scss">
section {
  margin-top: 75px;
  display: flex;
}
aside {
  order: 2;
  width: 50%;
  margin-left: 120px;
}
.company {
  .company-search {
    width: 100%;

    form {
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;
      padding-left: 16px;
    }
    input {
      width: 75%;
      border: none;
      outline: none;
    }
    button {
      height: 42px;
      background: #030953;
      border-radius: 0px 4px 4px 0px;
      padding: 0 22px;
      color: white;
      border: none;
    }
  }
}
.company-filter {
  background: #f7f7f7;
  border-radius: 4px;
  padding: 20px;
 
  h3 {
    margin-top: 0;
    margin-bottom: 16px;
  }
  .m-top {
    margin-top: 24px;
  }
  .company-filter-industry,
  .company-filter-specialization {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 16px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .company-filter-industry-list,
  .company-filter-specialization-list {
    display: none;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 2;
    position: absolute;
  }
  .company-filter-industry-list-item,
  .company-filter-specialization-list-item {
    padding: 10px 16px;
  }

  .open {
    display: block;
  }
}

@media (max-width: 700px) {
   section {
  display: flex;
  flex-wrap: wrap;
}
aside {
  order: 0;
  width: 100%;
  margin-left: 0;
}
   }
</style>