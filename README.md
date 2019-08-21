# IoT Simulator for IBM Cloud IoT Platform

## Prereq

### Node.js

On your workstation you need to install Node.js (and npm which is typically part of the node.js installation). The packages can be found [here](https://nodejs.org/en/download/). Install the LTS version. Test if the installation was successful with:

```
$ node -v
$ npm -v
```

Result is the version of both executables.

### IBM Cloud IoT Platform Starter

In the IBM Cloud Dashboard create an instance of the [IoT Platform Starter](https://cloud.ibm.com/docs/IoT-starter?topic=iot-starter-gettingstartedtemplate).

Perform the following steps to deploy the IoT Starter:

1.   Create an instance of the Starter Kit:

        a. Log in to or register for IBM Cloud at https://cloud.ibm.com.

        b. Open the catalog by selecting the catalog tab.

        c. Select the Starter Kits  category and there select the Internet of Things Platform Starter.

        d. On the Create a Cloud Foundry App page, enter a unique

            App Name
            Host Name

        and verify the selections  for:   

            Region/Location
            Organization
            Space

        Leave the defaults for the rest.    

2. Click Create to add Node-RED to your IBM Cloud organization.        
After the application is deployed, the Getting Started with Watson IoT Platform Starter page is displayed. 
        
Note: The staging process might take a few minutes.

## Register an IoT Device

Complete the following steps to prepare  a scenario that uses a simulated thermostat to monitor temperature and humidity of a room.

1.   Launch the IoT Platform dashboard.

        a. In the Resource list in the Cloud Foundry Services section click the name of your IoT Platform instance. The instance name usually ends with -iotf-service.

        b. Click Launch button to open the IoT Platform dashboard in a new browser tab.

 2. Make TLS optional
      
      TLS is enforced for connection security by default (good thing for a production environment) but for the sake of simplicity we are going to make TLS optional for this workshop.

      a. In the menu on the left side click Security, then on the Edit icon for Connection Security.

      b. For scope Default, select Security Level 'TLS Optional'. Click OK on the Warning pop-up. Then click Save in the upper right corner.

3.   Create a device type.

        a. From the main menu, select Devices.

        b. Open the Device Types tab (from: Browse | Action | Device Types | Interfaces)

        c. Click  Add Device Type, 
        Enter a unique name (e.g. "simulator") and description for your device type, and click Next.

        (optional) Defining a Template and Metadata on the next two pages is optional and can be safely skipped by clicking Next on each page.

        d.  Click Finish to add the device type.

4.   Add a device that uses the newly created device type

       a. Click Register Devices. The device type that you just created is displayed in the list of device types.

       b. Enter a unique Device ID (e.g. "sim-1"). Click Next.

        (optional) Providing descriptive data on the Add Device page or entering device metadata on the next page is optional, and you can safely skip those pages by clicking Next on each page.

        c.  On the Security page, enter an Authentication Token = password for your new device, then click Next.

        d. On the Summary page, verify that the information is correct and click Finish to add the device. 
         
 Make a note of the information that is displayed in the Your Device Credentials page. 
You need the following information to configure the simulator and display the data:

        * Organization ID
        * Device Type
        * Device ID
        * Authentication Token (= Password)

Keep this page open in your browser, but go to Recent Events or State. They will be empty for now.

## Run the IoT Simulator 

On your workstation:

```
$ cp template.config.json config.json
```

Edit config.json and add the info from the Device Credentials of the IoT Platform (leave the quotes "" around the values!)

* Org 
* Device Type
* Device ID
* Device Password
* Event name (change if you don't like "dhbw")

It should look similar to this:

```
{
    "ORG":"abcdef",
    "DEVICE_TYPE":"simulator",
    "DEVICE_ID":"sim-t480",
    "PASSWORD":"Passw0rd",
    "EVENT":"dhbw"
}
```

Install the node.js dependencies with:

```
$ npm install
```

Start the Simulator with:

```
$ npm start
```

You should see something like

```
> node-iot@1.0.0 start /home/harald/git/iot-nodejs
> node app.js

URL: mqtt://abcdefg.messaging.internetofthings.ibmcloud.com
Topic: iot-2/evt/dhbw/fmt/json
Client connected  true
Publishing {"d":{"temp":15,"humidity":50}}
Publishing {"d":{"temp":17,"humidity":55}}
Publishing {"d":{"temp":18.5,"humidity":61}}
Publishing {"d":{"temp":20,"humidity":68}}
Publishing {"d":{"temp":21.5,"humidity":65}}
```

Go back to your browser which should still display your device in the IoT Platform Dashboard. On the Recent Events or State section you should see your messages coming in every 5 seconds.



