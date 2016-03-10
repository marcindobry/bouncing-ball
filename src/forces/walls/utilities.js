export function dimensions($object = null) {
  if($object !== null) {
    return {
      width: $object.clientWidth,
      height: $object.clientHeight,
    }
  }
  return {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  };
};
