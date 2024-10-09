// src/utils/routerUtils.js
import { useRouter } from 'vue-router';

export function useNavigation() {
  const router = useRouter();

  const navigateTo = (path, params = {}) => {
    router.push({ path, query: params });
  };

  return {
    navigateTo,
  };
}
