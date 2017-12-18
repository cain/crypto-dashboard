<template>
  <div>
    <trend
    :data="candleData.map(x => x.L)"
    :gradient="['#ff3860', '#23d160']"
    auto-draw
    smooth>
  </trend>
  </div>
</template>

<script>
export default {
  props: ['candleData']
}
</script>
