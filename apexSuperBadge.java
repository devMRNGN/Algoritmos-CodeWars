public with sharing class WarehouseCalloutService implements Queueable, Database.AllowsCallouts{

    public static List<Object> getEquipmentsData(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-superbadge-apex.herokuapp.com/equipment');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200){
            List<Object> equipmentsList = (List<Object>) JSON.deserializeUntyped(response.getBody());
            return equipmentsList;
        } else {
            return new List<Object>();
        }
    }

    public void execute(QueueableContext context){
        List<Object> equipmentList = getEquipmentsData();
        List<Product2> equipmentsToUpsert = new List<Product2>();
        if(!equipmentList.isEmpty()){
            for(Object equipment : equipmentList){
                Map<String, Object> equipmentsMap = (Map<String, Object>)equipment;
                equipmentsToUpsert.add(new Product2(
                    Name = (String)equipmentsMap.get('name'),
                    Replacement_Part__c	= true,
                    Cost__c = (Decimal)equipmentsMap.get('cost'),
                    Current_Inventory__c = (Integer)equipmentsMap.get('quantity'),
                    Lifespan_Months__c = (Integer)equipmentsMap.get('lifespan'), 
                    Maintenance_Cycle__c = (Integer)equipmentsMap.get('maintenanceperiod'),
                    Warehouse_SKU__c = (String)equipmentsMap.get('sku')
                ));
            }
            if(!equipmentsToUpsert.isEmpty()){
                upsert equipmentsToUpsert;
            }
        }
    }
}