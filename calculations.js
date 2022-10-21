 var mollecular = [16.04, 30.070, 44.97, 58.123, 58.123, 72.150, 72.150,72.150, 84, 96, 107, 121, 134, 147, 161, 175, 190, 206, 222, 237, 251, 263, 275, 291, 300, 312, 324, 337, 349, 360, 372, 382, 394, 404, 415, 426, 437, 445, 456, 464, 475, 484, 495, 502, 512, 521, 531, 539 ],
     gravity =    [0.3, 0.35619, 0.50699, 0.56287, 0.58401, 0.62470, 0.63112, 0.59666, 0.69, 0.727, 0.749, 0.768, 0.782, 0.793, 0.804, 0.815, 0.826, 0.836, 0.843, 0.851, 0.856, 0.861, 0.866, 0.871, 0.876, 0.881, 0.885, 0.888, 0.892, 0.896, 0.899, 0.902, 0.905, 0.909, 0.912, 0.915, 0.917, 0.920, 0.922, 0.925, 0.927, 0.929, 0.931, 0.933, 0.934, 0.936, 0.938, 0.940 ],
     constants =  [[544.4, 0.2998, 1.0555, -0.00013478, -0.61641, 0],
                          [45203, -0.8063, 1.6015, -0.0018078, -0.3084, 0],
                          [0.01206, 0.20378, -1.3036, -0.002657, 0.5287, 0.0026012],
                          [6.77857, 0.401673, -1.58262, 0.00377409, 2.984036, -0.00425288]];                          

document.getElementById('component').onchange = function () {

var mollecularIndex = document.getElementById('component').selectedIndex - 1;
var zCritical = document.getElementById('zCritical'),       
    pcValue =constants[1][0]*(Math.pow(mollecular[mollecularIndex], constants[1][1]))*Math.pow(gravity[mollecularIndex], constants[1][2])*Math.exp(constants[1][3]*mollecular[mollecularIndex] + constants[1][4]*gravity[mollecularIndex] + constants[1][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),
    tcValue = constants[0][0]*(Math.pow(mollecular[mollecularIndex], constants[0][1]))*Math.pow(gravity[mollecularIndex], constants[0][2])*Math.exp(constants[0][3]*mollecular[mollecularIndex] + constants[0][4]*gravity[mollecularIndex] + constants[0][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),
    tbValue = constants[3][0]*(Math.pow(mollecular[mollecularIndex], constants[3][1]))*Math.pow(gravity[mollecularIndex], constants[3][2])*Math.exp(constants[3][3]*mollecular[mollecularIndex] + constants[3][4]*gravity[mollecularIndex] + constants[3][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]),
    vcValue = constants[2][0]*(Math.pow(mollecular[mollecularIndex], constants[2][1]))*Math.pow(gravity[mollecularIndex], constants[2][2])*Math.exp(constants[2][3]*mollecular[mollecularIndex] + constants[2][4]*gravity[mollecularIndex] + constants[2][5]*mollecular[mollecularIndex]*gravity[mollecularIndex]);

zCritical.value = (pcValue*vcValue*mollecular[mollecularIndex])/(10.73*tcValue);
document.getElementById('criticalPressure').value = pcValue;
document.getElementById("criticalTemperature").value = tcValue;
document.getElementById("criticalVolume").value = vcValue;
document.getElementById("boilingPoint").value = tbValue;
	}
