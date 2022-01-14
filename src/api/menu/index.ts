import request from '/@/utils/request';
const basefix = 'http://rap2api.taobao.org/app/mock/297084/pk-saas-admin/menu/'

/**
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 */

/**
 * 获取后端动态路由菜单(admin)
 * @param params 要传的参数值，非必传
 * @returns 返回接口数据
 */
export function getMenuAdmin() {
	return request({
		url: basefix + 'adminMenu',
		method: 'get'
	});
}

/**
 * 获取后端动态路由菜单(test)
 * @param params 要传的参数值，非必传
 * @returns 返回接口数据
 */
export function getMenuTest() {
	return request({
		url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/testMenu.json',
		method: 'get'
	});
}
