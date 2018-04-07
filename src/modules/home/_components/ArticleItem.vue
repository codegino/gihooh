<template>
  <div class="article">
    <h2 class="article__title mb-sm">Article</h2>
    <p class="article__date">December 2 1990</p>
    <p class="article__content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat at sapien sed congue. Curabitur tristique est malesuada, lacinia velit vel, tempor justo. Donec vulputate odio metus, consectetur ultrices mi mattis eu. Quisque a justo felis. In congue scelerisque justo, id iaculis sapien dictum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet ligula urna, in consectetur justo pellentesque ac. Nullam aliquam finibus nisl, eu consectetur mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet neque elit. Fusce auctor tincidunt sapien at facilisis.

      Fusce nec pretium justo. Donec congue, est non sagittis porta, metus erat consectetur ante, quis feugiat odio elit non risus. Quisque semper, sem elementum facilisis dictum, augue libero blandit nunc, ac semper orci orci pretium lectus. Maecenas purus enim, lobortis eget lorem id, maximus vestibulum libero. Aliquam a ornare dui, consequat vestibulum diam. Ut pretium porttitor mauris. Nullam quis lacus elementum lectus ultrices commodo. Mauris tristique urna vitae magna malesuada tempor.

      Donec ultrices, tortor vel sagittis semper, justo elit elementum nibh, a molestie nulla sapien in nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed semper nisl. Pellentesque at justo a sapien vehicula tincidunt ac eu nulla. Cras id erat in tellus finibus pellentesque nec vel purus. Quisque faucibus risus nec rutrum bibendum. Aenean venenatis vitae metus tempor facilisis.

      Vestibulum venenatis et felis eget facilisis. Nunc id est eget felis sagittis consequat. Sed pharetra risus ac felis mattis fermentum. In id feugiat est. Cras a laoreet ex. Sed tempus porttitor tortor sit amet molestie. Nam sed nibh eleifend massa consequat rhoncus vel sit amet ante. Vestibulum sed aliquet erat. Curabitur ultricies, dolor in elementum eleifend, nulla felis finibus augue, sit amet scelerisque dui nisl facilisis diam. Praesent nisl felis, bibendum nec massa id, lobortis venenatis metus. Mauris non leo sed neque elementum varius nec eget odio.

      Quisque in bibendum orci. Fusce aliquet ornare purus ac gravida. Proin semper, nibh et mollis malesuada, purus arcu finibus nisi, quis porta lectus diam facilisis orci. Duis ac felis vehicula dolor finibus condimentum. Suspendisse eget ipsum sit amet justo iaculis dictum vel sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel dolor tristique, dapibus est non, tincidunt ex. Aliquam ante sapien, lobortis ac quam ac, commodo aliquet arcu. Nam dictum posuere est eget ullamcorper. Vestibulum iaculis urna eget accumsan mollis. Curabitur sit amet mattis turpis, quis molestie lacus. Phasellus purus lacus, pellentesque eu libero sit amet, iaculis fringilla ipsum. Aliquam ac felis id tortor mattis venenatis quis at velit.
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 1fr;
  justify-content: space-between;
  margin: 1rem 3rem;

  &__content {
    grid-column: 1 / -1;
  }

  &__date {
    text-align: right;
  }
}
</style>
