App.ManagerController=Ember.ArrayController.extend({loggedUser:null,sortAscending:!0,selectClass:["form-control"],statusList:[{title:"Ally",color:"ally"},{title:"Vassal",color:"vassal"},{title:"Non Aggression Pact",color:"noagression"},{title:"Enemy",color:"enemy"}],actions:{saveAliance:function(e,t,n){var r=new Date,i=r.getDate()<9?"0"+r.getDate():r.getDate(),s=r.getMonth()<9?"0"+r.getMonth():r.getMonth(),o=i+"."+s+"."+r.getFullYear().toString().slice(2);if(this.loggedUser!=""){aliance=this.store.createRecord("aliance",{name:this.loggedUser,aliance:e,status:t,fill:n,date:o});aliance.save()}},removeAliance:function(e){e.deleteRecord();e.save()},sortBy:function(e){this.set("sortProperties",[e]);this.sortAscending?this.set("sortAscending",!1):this.set("sortAscending",!0)}}});