%template%
<!--☯js-->
<script>
  // %import window%
  // %import CONFIG%
  %import event%
  %import model%
  %import methods%
  import vmConfig from '%vmConfigHandlerPath'
  // 异步加载某些情况下会出问题，原因未知，所以暂时不采用异步加载
  // r => require.ensure([], () => r(require('%path')), 'c-%name')
  export default {
    name: '%name', // o not use built-in or reserved HTML elements as component id:img, 意思是不能和html标签同名，那么加个下划线好了
    components: {
      /*import components file template:'%name': require('%path').default,
       */
      /*start:import components file*/
      /*end:import components file*/
    },
    ...vmConfig(model, life, event, watch, methodsSource)
  }
</script>