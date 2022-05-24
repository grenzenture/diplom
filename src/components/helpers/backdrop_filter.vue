
/**
 *  Компонент для замены backdrop filter
 */
<template>
  <svg
    ref="svgwrap"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    :viewBox="'0 0 ' + viewbox_width + ' ' + viewbox_height"
  >
    <filter :id="'blur-image' + gen_id" x="0" y="0">
      <!-- Блюр -->
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
      <!-- Затемнение -->
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.6" />
        <feFuncG type="linear" slope="0.6" />
        <feFuncB type="linear" slope="0.6" />
      </feComponentTransfer>
    </filter>
    <image
      ref="img"
      :xlink:href="image"
      :x="image_x"
      :y="image_y"
      :width="image_width + 'px'"
      :height="image_height + 'px'"
      :filter="'url(#blur-image' + gen_id + ')'"
    />
    <image
      :xlink:href="image"
      :x="image_x"
      :y="image_y"
      :width="image_width + 'px'"
      :height="image_height + 'px'"
      :mask="'url(#blur-mask' + gen_id + ')'"
    />
    <mask :id="'blur-mask' + gen_id">
      <rect ref="rect" width="100%" height="100%" fill="white" opacity="1" />

      <!-- :y="transform_y" -->
      <rect
        :id="'mask' + gen_id"
        ref="mask"
        class="blur"
        y="100%"
        :style="{ transform: 'translateY(' + transform_y + ')' }"
        :width="blur_width"
        :height="blur_height"
        fill="black"
        opacity="1"
      />
    </mask>
  </svg>
</template>

<script>
export default {
  name: "Backfilter",

  props: {
    /** Изображение на которое накладывается фильтр */
    image: "",
  },

  data() {
    return {
      parent: "" /** Родительский элемент маски */,
      transform_y: 0 /** Сдвиг для скрытия на ховер */,

      /** ширина и высота блока блюра */
      blur_width: 100,
      blur_height: 100,

      /** Ширина, высота и позиция изображения  */
      image_width: 100,
      image_height: 100,
      image_x: 0,
      image_y: 0,

      /** размеры viewbox */
      viewbox_width: 0,
      viewbox_height: 0,
    };
  },

  watch: {
    image() {
      this.updateResize();
    },
  },

  created() {
    this.gen_id = Math.floor(Math.random() * 10000); // id для масок
  },

  mounted() {
    this.parent = this.$refs.svgwrap.parentNode;
    setTimeout(() => {
      this.getDimensions();
      this.getViewBox();
      this.getImagePosition();
      this.addEv();
    }, 1000);
    window.addEventListener("resize", this.updateResize);
  },

  methods: {
    /** Обновление размеров */
    updateResize() {
      this.getDimensions();
      this.getViewBox();
      this.getImagePosition();
    },

    getViewBox() {
      /** Задаем размеры viewbox через определение сторон контейнера svg */
      const parent = this.parent.getBoundingClientRect();
      this.viewbox_width = parent.width;
      this.viewbox_height = parent.height;
    },

    /** Центрируем изображение во viewbox */
    getImagePosition() {
      /** Находим размеры изображения */
      const img = new Image();

      img.onload = () => {
        this.image_width = img.width;
        this.image_height = img.height;

        this.image_x = 0;
        this.image_y = 0;

        const img_ratio = this.image_height / this.image_width;
        const container_ratio = this.viewbox_height / this.viewbox_width;

        if (container_ratio > img_ratio) {
          this.image_height = this.viewbox_height;
          this.image_width = this.viewbox_height / img_ratio;
        } else {
          this.image_width = this.viewbox_width;
          this.image_height = this.viewbox_width * img_ratio;
        }

        if (this.image_width > this.viewbox_width) {
          this.image_x = -((this.image_width - this.viewbox_width) / 2);
        }

        if (this.image_height > this.viewbox_height) {
          this.image_y = -((this.image_height - this.viewbox_height) / 2);
        }
      };

      img.src = this.image;
    },

    /** Определяем ширину и высоту блока блюра */
    getDimensions() {
      const parent_dimensions = this.parent.getBoundingClientRect();
      const hover_block = this.parent
        .querySelector(".img-hover")
        .getBoundingClientRect();
      // this.blur_height = Math.floor(hover_block.height / parent_dimensions.height * 100);
      // this.blur_width = Math.floor(hover_block.width / parent_dimensions.width * 100);
      this.blur_height = `${hover_block.height}px`;
      this.blur_width = `${hover_block.width}px`;
    },

    /** Добавляем ховер ивенты на родительский блок */
    addEv() {
      this.parent.addEventListener("mouseenter", () => {
        this.transform_y = `-${this.blur_height}`;
      });
      this.parent.addEventListener("mouseleave", () => {
        this.transform_y = 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blur {
  position: absolute;
}
</style>