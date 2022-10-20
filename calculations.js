

         
         var mollecular = [16, 30, 44, 50],
             gravity = [1, 1, 1, 1],
             constants = [[544.4, 0.2998, 1.0555, -0.00013478, -0.61641, 0],
                          [45203, -0.8063, 1.6015, -0.0018078, -0.3084, 0],
                          [0.01206, 0.20378, -1.3036, -0.002657, 0.5287, 0.0026012],
                          [6.77857, 0.401673, -1.58262, 0.00377409, 2.984036, -0.00425288]];



document.getElementById('component').onchange = function () {

	var     mollecularIndex = document.getElementById('component').selectedIndex - 1;
		    /*propertyIndex = document.getElementById('riaziProperty').selectedIndex-1;*/

    var acentricFactor = document.getElementById('acentric'),
         zCritical = document.getElementById('zCritical'),
         
    pcValue =constants[1][0]*(Math.pow(mollecular[mollecularIndex], constants[1][1]))*Math.pow(gravity[mollecularIndex], constants[1][2])*Math.exp(constants[1][3]*mollecular[mollecularIndex] + constants[1][4]*gravity[mollecularIndex] + constants[1][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),

    tcValue = constants[0][0]*(Math.pow(mollecular[mollecularIndex], constants[0][1]))*Math.pow(gravity[mollecularIndex], constants[0][2])*Math.exp(constants[0][3]*mollecular[mollecularIndex] + constants[0][4]*gravity[mollecularIndex] + constants[0][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),

    tbValue = constants[3][0]*(Math.pow(mollecular[mollecularIndex], constants[3][1]))*Math.pow(gravity[mollecularIndex], constants[3][2])*Math.exp(constants[3][3]*mollecular[mollecularIndex] + constants[3][4]*gravity[mollecularIndex] + constants[3][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),
    vcValue = constants[2][0]*(Math.pow(mollecular[mollecularIndex], constants[2][1]))*Math.pow(gravity[mollecularIndex], constants[2][2])*Math.exp(constants[2][3]*mollecular[mollecularIndex] + constants[2][4]*gravity[mollecularIndex] + constants[2][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]);

acentricFactor.value = 3*(Math.log(pcValue/14.7))/(7*(tcValue/(tbValue-1))) - 1;

zCritical.value = (pcValue*vcValue*mollecular[mollecularIndex])/(10.73*tcValue);

document.getElementById('criticalPressure').value = pcValue;
document.getElementById("criticalTemperature").value = tcValue;
document.getElementById("criticalVolume").value = vcValue;
document.getElementById("boilingPoint").value = tbValue;

           

	/* ------ calculation by indexing --------
	
	
	if (mollecularIndex >=0 && propertyIndex>=0) {

		
           document.getElementById('propertyResult').value = constants[propertyIndex][0]*(Math.pow(mollecular[mollecularIndex], constants[propertyIndex][1]))*Math.pow(gravity[mollecularIndex], constants[propertyIndex][2])*Math.exp(constants[propertyIndex][3]*mollecular[mollecularIndex] + constants[propertyIndex][4]*gravity[mollecularIndex] + constants[propertyIndex][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]);
       }

       else {document.getElementById('propertyResult').value = 'select the element';} */

	}


/*document.getElementById('riaziProperty').onchange = function () {

			var mollecularIndex = document.getElementById('component').selectedIndex - 1,
		        propertyIndex = document.getElementById('riaziProperty').selectedIndex-1;
           

		    if(mollecularIndex >=0 && propertyIndex>=0) {

		
           document.getElementById('propertyResult').value = constants[propertyIndex][0]*(Math.pow(mollecular[mollecularIndex], constants[propertyIndex][1]))*Math.pow(gravity[mollecularIndex], constants[propertyIndex][2])*Math.exp(constants[propertyIndex][3]*mollecular[mollecularIndex] + constants[propertyIndex][4]*gravity[mollecularIndex] + constants[propertyIndex][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]);

	}

	else {document.getElementById('propertyResult').value='Select the Elements';}

}

*/


