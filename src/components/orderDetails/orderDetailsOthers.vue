<template>
    <div>
      <!--2menu弹框-->
      <div class="secondMenu">
        当前已绑定xxx
      </div>
      <!--3menu弹框-->
      <form class="thirdMenu">
        <h3>确认桌号</h3>
        <input type="text" placeholder="确认桌位" value="">
        <input type="text" placeholder="人数" value="2">
        <input type="text" placeholder="备注">
        <p>
          <a href="javascript:;">取消</a>
          <a href="javascript:;">拒绝</a>
          <a href="javascript:;">确认</a>
        </p>
      </form>
      <!--5Menu-->
      <form class="fifthMenu">
        <h3>转台<span>111</span></h3>
        <input type="text" placeholder="转向几号桌">
        <input type="text" placeholder="人数">
        <p>
          <a href="javascript:;">取消</a>
          <a href="javascript:;">确定</a>
        </p>
      </form>
      <!--6menu-->
      <form class="sixthMenu">
        <h3>并台<span>111</span></h3>
        <input type="text" placeholder="并向几号桌">
        <p>
          <a href="javascript:;">取消</a>
          <a href="javascript:;">确定</a>
        </p>
      </form>
      <!--7menu-->
      <div class="modifyOrder">
        <addMealHeader :title="msg.title"></addMealHeader>
        <ul class="modifyOrderList">
          <h3>2018-02-04 10:47</h3>
          <li>
            <div class="modifyOrderUp">
              <a href="javascript:;">鸡全翅</a>
              <span>7.00×1</span>
            </div>
            <div class="modifyOrderDown">
              <div class="modifyOrderDownFlex">
                <div class="modifyOrderDownLeft"></div>
                <div class="modifyOrderDownRight">
                  <a href="javascript:;">退菜</a>
                  <a href="javascript:;">赠送</a>
                  <a href="javascript:;">改价</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--8menu-->
      <div class="EighthMenu">
        <h3>确定取消？</h3>
        <p><a href="javascript:;">取消</a><a href="javascript:;">确认</a></p>
      </div>
    </div>
</template>

<script>
  import addMealHeader from "../addMeal/addMealHeader"
    export default {
        name: "order-details-others",
      components:{
        addMealHeader
      },
      data(){
          return{
            msg:{
              "title":"修改订单"
            }
          }
      }
    }
</script>

<style scoped>

</style>
