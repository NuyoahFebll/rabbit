import httpInstance from '@/utils/http';

export default function geiCategory() {
	return httpInstance({
		url: 'home/category/head',
	});
}
