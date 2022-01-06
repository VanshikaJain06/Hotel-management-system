<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		
		<html>
			<body>
				<h2 style="text-align:center;">Hotel Management System</h2>
				<h3 style="text-align:center;">hotel</h3>
				<table border="2" align="center">
					<tr>
						<th>hotel_name</th>
						<th>hotel_id</th>
						<th>address</th>
						<th>contact_number</th>
						<th>fare</th>
					
					</tr>
					<xsl:for-each select="Hotel_Management/Hotel">
						<tr>
							<td>
								<xsl:value-of select="hotel_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="hotel_id"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="address"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="contact_number"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="fare"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
		
		
		
	