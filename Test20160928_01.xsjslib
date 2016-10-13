function create_instead(param) {
    var after = param.afterTableName;
    var pStmt = param.connection.prepareStatement('select * from "'+after+'"');
    var rs = pStmt.executeQuery();

    if (rs.next()) {
        pStmt = param.connection.prepareStatement('insert into "IOTADMIN"."hcpworkshop.model::IoTModel.T_MOB_SUBSCRIPTION"("DEVICEID", "MOBILEUSER", "LASTUPDATED", "TITLE", "DELIVERYADDRESS", "ID") values(?, ?, ?, ?, ?, ?)');

        pStmt.setString(1, rs.getString(1));
        pStmt.setString(2, rs.getString(2));
        pStmt.setTimestamp(3, rs.getTimestamp(3));
        pStmt.setString(4, rs.getString(4));
        pStmt.setString(5, rs.getString(5));
        pStmt.setString(6, rs.getString(6));

        pStmt.executeUpdate();
        pStmt.close();

        }

    rs.close();
}
function update_instead(param) {
   $.trace.debug("entered function");
   var after = param.afterTableName;

   var pStmt = param.connection.prepareStatement('select * from "'+after+'"');
    var rs = pStmt.executeQuery();

    if (rs.next()) {
        pStmt = param.connection.prepareStatement('UPDATE "IOTADMIN"."hcpworkshop.model::IoTModel.T_MOB_SUBSCRIPTION" set DEVICEID=?, MOBILEUSER=?, LASTUPDATED=?, TITLE=?, DELIVERYADDRESS=? WHERE ID=?');

        pStmt.setString(1, rs.getString(1));
        pStmt.setString(2, rs.getString(2));
        pStmt.setTimestamp(3, rs.getTimestamp(3));
        pStmt.setString(4, rs.getString(4));
        pStmt.setString(5, rs.getString(5));
        pStmt.setString(6, rs.getString(6));

        pStmt.executeUpdate();
        pStmt.close();

        }

    rs.close();
}
function delete_instead(param) {
   $.trace.debug("entered function");
	var before = param.beforeTableName;

	var pStmt = param.connection.prepareStatement('select * from "'+before+'"');
    var rs = pStmt.executeQuery();

    if (rs.next()) {
        pStmt = param.connection.prepareStatement('DELETE FROM "IOTADMIN"."hcpworkshop.model::IoTModel.T_IOT_DEVICETYPES_INFO" WHERE DEVICETYPEID=?');

        pStmt.setString(1, rs.getString(1));

        pStmt.executeUpdate();
        pStmt.close();

        }

    rs.close();

}