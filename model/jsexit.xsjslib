function create_instead(param) {
	let after = param.afterTableName;
	let pStmt = param.connection.prepareStatement('select * from "' + after + '"');
	var rs = pStmt.executeQuery();

	if (rs.next()) {
		pStmt = param.connection.prepareStatement(
			'insert into "IOTADMIN"."hcpworkshop.model::IoTModel.T_IOT_DEVICETYPES_INFO"("DEVICETYPEID", "SHORTDESCRIPTION", "LONGDESCRIPTION", "DATECREATED") values(?, ?, ?, ?)'
		);

		pStmt.setString(1, rs.getString(1));
		pStmt.setString(2, rs.getString(2));
		pStmt.setString(3, rs.getString(3));
		pStmt.setTimestamp(4, rs.getTimestamp(4));

		pStmt.executeUpdate();
		pStmt.close();
	}
	rs.close();
}

function update_instead(param) {
	$.trace.debug("entered function");

	let after = param.afterTableName;
	let pStmt = param.connection.prepareStatement('select * from "' + after + '"');
	var rs = pStmt.executeQuery();

	if (rs.next()) {
		pStmt = param.connection.prepareStatement(
			'UPDATE "IOTADMIN"."hcpworkshop.model::IoTModel.T_IOT_DEVICETYPES_INFO" set SHORTDESCRIPTION=?, LONGDESCRIPTION=?, DATECREATED=? WHERE DEVICETYPEID=?'
		);

		pStmt.setString(1, rs.getString(2));
		pStmt.setString(2, rs.getString(3));
		pStmt.setTimestamp(3, rs.getTimestamp(4));
		pStmt.setString(4, rs.getString(1));

		pStmt.executeUpdate();
		pStmt.close();
	}
	rs.close();
}
/**
 *
 **/
function delete_instead(param) {
	$.trace.debug("entered function");
	var before = param.beforeTableName;
	let pStmt = param.connection.prepareStatement('select * from "' + before + '"');
	var rs = pStmt.executeQuery();

	if (rs.next()) {
		pStmt = param.connection.prepareStatement(
			'DELETE FROM "IOTADMIN"."hcpworkshop.model::IoTModel.T_IOT_DEVICETYPES_INFO" WHERE DEVICETYPEID=?');

		pStmt.setString(1, rs.getString(1));

		pStmt.executeUpdate();
		pStmt.close();
	}
	rs.close();
}