<script lang="tsx">
  import { defineComponent, Transition, KeepAlive } from 'vue';
  import { RouterView } from 'vue-router';
  export default defineComponent({
    setup() {
      return () => (
        <RouterView>
          {({ Component, route }) =>
            Component && (
              <Transition name={'fade'} mode={'out-in'} appear>
                {route.meta.keepAlive ? (
                  <KeepAlive>
                    <Component key={route.fullPath}></Component>
                  </KeepAlive>
                ) : (
                  <Component></Component>
                )}
              </Transition>
            )
          }
        </RouterView>
      );
    },
  });
</script>
<style lang="less" scoped></style>
