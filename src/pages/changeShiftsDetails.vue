<template>
  <div class="changeShiftsDetails">
    <changeShiftsDetailsHeader :title="msg.title"></changeShiftsDetailsHeader>
    <changeShiftsDetailsSection :allMoney="msg.allMoney" :person="msg.person"></changeShiftsDetailsSection>
    <changeShiftsDetailsFooter></changeShiftsDetailsFooter>
    <changeShiftsDetailsOther></changeShiftsDetailsOther>
  </div>
</template>

<script>
  import changeShiftsDetailsHeader from "../components/changeShiftsDetails/changeShiftsDetailsHeader"
  import changeShiftsDetailsFooter from "../components/changeShiftsDetails/changeShiftsDetailsFooter"
  import changeShiftsDetailsOther from "../components/changeShiftsDetails/changeShiftsDetailsOther"
  import changeShiftsDetailsSection from "../components/changeShiftsDetails/changeShiftsDetailsSection"
  import "../../static/css/changeShiftsDetails.css"
    export default {
      data(){
        return{
          msg:{
            "title":"交接班",
            "person":[
              {
                "name":"number01",
                "date":"2018-02-02 13:25:57-18:40:03"
              }
            ],
            "allMoney":{
              "eatNumb":"10",
              "eatPeople":"20",
              "eatOrder":"20",
              "outOrder":"0",
              "lastMoney":"2533",
              "mustMoney":"2533",
              "trueMoney":"2533",
              "elseMoney":"0",
              "serverMoney":"0",
              "notZeroMoney":"0",
              "nGetMoney":"0",
              "vipMoney":"0",
              "all":"2533"
            }
          }
        }
      },
        name: "change-shifts-details",
      components:{
        changeShiftsDetailsHeader,
        changeShiftsDetailsSection,
        changeShiftsDetailsFooter,
        changeShiftsDetailsOther
      },
      mounted:function(){

// 打印机点击弹出不打印信息

        $(".cSDHeader a:last-child").click(function(){
          $(".cSDPosition").css("display","block").animate({"opacity":"1"},450);
          setTimeout(function(){
            $(".cSDPosition").animate({"opacity":"0"},800,function(){
              $(".cSDPosition").css("display","none");
            })
          },700)
        })

// 交接班点击弹出交接成功信息
        $(".cSDFooter").click(function(){
          $(".cSDPosition2").stop().css("display","block").animate({"opacity":"1"},450);
          setTimeout(function(){
            $(".cSDPosition2").stop().animate({"opacity":"0"},800,function(){
              $(".cSDPosition2").css("display","none");
            });
            $(".cSDFooter").css("display","none");
          },700)
        })
      }
    }
</script>

<style scoped>
.changeShiftsDetails{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
