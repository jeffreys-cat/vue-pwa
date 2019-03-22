declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
declare module 'vue-awesome-swiper' {
    import Vue, {PluginObject} from 'vue';

    interface VueAwesomeSwiper extends PluginObject<any> {
        swiper: Vue;
        swiperSlide: Vue;
    }

    const VueAwesomeSwiper: VueAwesomeSwiper;
    export default VueAwesomeSwiper;

    export const swiper: Vue;
    export const swiperSlide: Vue;
}
