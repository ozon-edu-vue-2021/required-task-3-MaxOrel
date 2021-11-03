<template>
  <div class="person">
    <div class="person__photo">
      <img :src="person.picture" alt="photo" />
      />
      <a
        class="icon icon_theme_dark person__home"
        href="#"
        aria-label="Адрес почты"
      >
        <home-outline fillColor="#fff" decorative/>
      </a>
    </div>

    <div class="person__info">
      <h2 class="person__info-name">{{ person.name }}</h2>
      <p class="person__position">{{ person.position }}</p>
      <h3 class="person__group">Подразделение {{ person.groupId }}</h3>
      <p class="person__info-about">О себе: {{ person.about }}</p>
      <a
        class="icon person__info-email"
        :href="`mailto:${person.email}`"
        aria-label="Адрес почты"
        ><email-outline fillColor="#456FEC" decorative
      /></a>
      <a class="icon person__link" href="#" aria-label="Адрес почты">
        <span class="person__unit">k3</span>
        <span
          ><link-variant
            fillColor="#456FEC"
            decorative
            class="person__link-icon" /></span
      ></a>
    </div>
  </div>
</template>

<script>
import legend from "@/assets/data/legend.json";

import EmailOutline from "icons/EmailOutline.vue";
import HomeOutline from "icons/HomeOutline.vue";
import LinkVariant from "icons/LinkVariant.vue";

console.log(legend);

export default {
  components: {
    EmailOutline,
    HomeOutline,
    LinkVariant,
  },
  props: {
    person: {
      type: Object,
      default: null,
    },
  },
  computed: {
    formatedDate() {
      return this.person.registered;
    },
  },
};
</script>

<style scoped>
.person {
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-gap: 8px;
}

.person__photo {
  position: relative;
}

.person__link-icon svg {
  transform: rotate(45deg);
}

.person__photo img {
  height: 100%;
  width: 160px;
  object-fit: cover;
}

.person__info {
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  position: relative;
  padding-bottom: 50px;
}

.person__info-about {
  margin: 0;
  color: #9da5ae;
  -webkit-line-clamp: 5; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  overflow: hidden;
}

.person__group {
  font-size: 16px;
  font-weight: normal;
  color: #9da5ae;
}

.person__info-name {
  margin: 0;
  color: #456fec;
  font-size: 18px;
}

.person__position {
  margin: 0;
  font-weight: bold;
}

.person__info-email {
  position: absolute;
  bottom: 0;
  left: 0;
}

.person__home {
  position: absolute;
  bottom: 0;
  left: 0;
}
.person__link {
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.icon {
  background-color: #e2ebfd;
  border-radius: 8px;
  padding: 4px 8px;
  box-sizing: border-box;
}

.icon svg {
  display: block;
}

.icon_theme_dark {
  background-color: #848285;
}
</style>
