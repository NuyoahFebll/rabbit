//封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category';
import { ref, onMounted } from 'vue';
//导入获取路由方法
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
	//获取分类数据
	const categoryData = ref({});
	//调用方法获取路由
	const route = useRoute();
	const getCategory = async (id = route.params.id) => {
		const ref = await getCategoryAPI(id);
		categoryData.value = ref.result;
	};

	onMounted(() => getCategory());

	//监听路由重新请求接口
	// watch(
	// 	() => route.params.id,
	// 	() => {
	// 		getCategory();
	// 	}
	// );

	//目标:路由参数变化的时候 可以把分类数据接口重新发送
	onBeforeRouteUpdate(to => {
		//存在问题：使用最新的路由参数请求最新的分类数据
		getCategory(to.params.id);
	});

	return {
		categoryData,
	};
}
