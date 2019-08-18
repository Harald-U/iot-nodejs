# IoT Simulator for IBM Cloud IoT Platform

## Prereq

In the IBM Cloud Dashboard create an instance of the [IoT Platform Starter](https://cloud.ibm.com/docs/IoT-starter?topic=iot-starter-gettingstartedtemplate).

Complete the following steps to simulate a scenario that uses a thermostat to monitor temperature and humidity of a room.

1.   Launch the Watson IoT Platform dashboard.

        a. Scroll to the Services section and click the name of your Watson IoT Platform instance. The instance name usually ends with -iotf-service.

        b. Click Launch Dashboard to open the Watson IoT Platform dashboard in a new browser tab.

2.   Create a device type.

        a. From the main menu, select Devices, and then click Add Device.

        b. In the Add Device page, click Create device type.

        c. In the Create Device Type page, click Create device type.
        Enter a unique name and description for your device type, and click Next.

        (optional) Defining a Template and Metadata on the next two pages is optional and can be safely skipped by clicking Next on each page.

        d.  Click Create to add the device type.

3.   Add a device that uses the newly created device type.

       a. On the Add Device page, the device type that you just created is displayed in the list of device types. Click Next to add a device that uses that device type.

       b. Enter a unique device ID (for example, LivingRoomThermo1).

        (optional) Providing descriptive data on the Add Device page or entering device metadata on the next page is optional, and you can safely skip those pages by clicking Next on each page.

        c.  On the Security page, click Next to generate an authentication token for your device.

        d. On the Summary page, verify that the information is correct and click Add to add the device. Click Back to return to a previous page.
         
    Make a note of the information that is displayed in the Your Device Credentials page. You need the following information to configure the simulator and display the data:
        Organization ID
        Device Type
        Device ID
        Authentication Token (= Password)

On your workstation:

```
$ cp template.config.json config.json
```

Edit config.json and add from IoT Platform (leave the quotes "" around the values!)

* Org 
* Device Type
* Device ID
* Device Password
* Event name

