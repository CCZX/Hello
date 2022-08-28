export function Response(key?: string) {
  return function (constructor: Object, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function (...args: any[]) {
      const originRes = method.apply(this, args);

      return {
        data: originRes,
        code: 200,
        message: 'ok',
      };
    };
  };
}
