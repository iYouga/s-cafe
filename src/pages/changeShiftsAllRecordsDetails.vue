<template>
  <div class="changeShiftsAllRecordsDetails">
    <changeShiftsDetailsHeader :title="msg.title"></changeShiftsDetailsHeader>
    <changeShiftsAllRecordsDetailsSec :allMoney="msg.allMoney" :person="msg.person"></changeShiftsAllRecordsDetailsSec>
    <changeShiftsDetailsOther></changeShiftsDetailsOther>
  </div>
</template>

<script>
  import changeShiftsDetailsHeader from "../components/changeShiftsDetails/changeShiftsDetailsHeader"
  import changeShiftsDetailsOther from "../components/changeShiftsDetails/changeShiftsDetailsOther"
  import changeShiftsAllRecordsDetailsSec from "../components/changeShiftsAllRecordsDetails/changeShiftsAllRecordsDetailsSec"
    export default {
      data(){
        return{
          msg:{
            "title":"当班记录",
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
        name: "change-shifts-all-records-detail",
      components:{
        changeShiftsDetailsHeader,
        changeShiftsDetailsOther,
        changeShiftsAllRecordsDetailsSec
      },
      mounted:function(){
        $(".cSDHeader a:last-child").click(function(){
          $(".cSDPosition").css("display","block").animate({"opacity":"1"},450);
          setTimeout(function(){
            $(".cSDPosition").animate({"opacity":"0"},800,function(){
              $(".cSDPosition").css("display","none");
            })
          },700)
        })
      }
    }
</script>

<style scoped>
.changeShiftsAllRecordsDetails{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
