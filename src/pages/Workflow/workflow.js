import React from 'react';
import './workflow.css';
import { Link as RouterLink } from 'react-router-dom';

const Workflow = () => {
  return (
    <div className='workflow'>
      <div className='workflowSec'>

        <div className='workflowContainer'>
          <h2>Instructions to use Carbon Footprint Tracker :</h2>
          <p>
            <br />
            Step 1: Select Country and Adjust Tracker Size:<br />
            Choose your country from the Country Dropdown tab for accurate emissions calculation.
            Optionally, increase the tracker size by clicking on "A" at the bottom of each tab.<br />
            <br />

            Step 2: Set Time Duration (Optional):<br />
            Use the calendar to set the time duration (annual/monthly) based on your consumption if needed.<br />
            <br />

            Step 3: Save Data:<br />
            Click on the save button to ensure your entered values are saved for calculation.<br />
            <br />

            Step 4:  Select Category:<br />

            Choose the category you want to track like House, Flights, Car, etc.<br />
            <br />

            Step 5: Navigate to House Tab:<br />
            Click on the "House" button located at the top right corner in the welcome tab.<br />
            <br />

            Step 6 : Enter Consumption Data:<br />
            Fill in the boxes with your consumption data in the House tab.<br />
            Optionally, click on "Calculate Household Footprint" to see only household carbon consumption.<br />
            <br />

            Step 7: Navigate Between Tabs:<br />
            To return to a previous tab and change set data values, click on the button at the left end corner of the respective tab category.<br />
            <br />

            Step 8: Calculate Total Consumption:<br />
            If you want to calculate consumption from all categories collectively:<br />
            Click on the respective buttons at the right end corner of each tab.<br />
            Finally, click on the "Results" button.<br />
            <br />

            Step 9: View Total Carbon Consumption:<br />
            After clicking on the Results button, your total carbon consumption from all categories will be displayed on the Results tab.<br />
            <br />

            Step 10: Offset Carbon Emissions:<br />
            If you want to offset your emissions or get ideas on reducing consumption:<br />
            Click on the "Offset Now" button available in the Results tab.<br />
            <br />

            Step 11: Calculate Category-Wise Consumption:<br />
            You can also calculate consumption by category:<br />
            Click on different categories at the top of the tracker to navigate to each category and calculate consumption individually.<br />
            <br />

            These steps should guide you through effectively using the Carbon Footprint Tracer.<br />
            <br />
          </p>
        </div>

        <div className='totracker'>
          <button>
            <li>
              <RouterLink to="/tracker" className='/'>Start Here</RouterLink>
            </li>
          </button>
        </div>

        <div className='workflowContainer'>
          <h2>FAQ’s (Frequently Asked Questions)
          </h2>
          <p>
            <br />
            Welcome Tab :<br />
            1.	Why to select the country where I live?<br />
            This enables a more accurate calculation of your emissions from electricity usage, as the factor depends on how the electricity is
            generated in the region (e.g. from Coal, Gas, Nuclear, Renewables etc.). The country selection also allows you to compare your results
            with the average for your country.<br />
            2.	What consumption period should I use?<br />
            Carbon footprint calculations are typically based on annual emissions from the previous 12 months; however, you are able to select a
            more suitable time period (e.g. a month) if you so desire.<br />
            3.	House Tab / Buildings Tab<br />
            When entering data for fuel and electricity the most accurate way is by entering the amount used in kWh or volume (where appropriate).
            There is an option to enter gas based on the amount spent. This is a less accurate way of calculating the emissions, due to the various
            energy tariffs available. The calculation results assume the following energy tariffs: Gas at 3.398p/kWh.<br />
            4.	Flight Tab<br />
            How are the flight emissions calculated?<br />
            Firstly, the distances are calculated between the airports selected, using the greater circle method. This is then multiplied by the 
            appropriate emissions factor specific to the type of flight (UK domestic, short haul or long haul) and the class of seat taken 
            (e.g. economy class, business class etc.).<br />
            What is the difference between selecting First Class and Economy seating?<br />
            Different emission factors were calculated according to the relative area on the aircraft occupied by different seating classes, 
            for example a first class seat would occupy a larger area compared to an economy class equivalent per passenger and therefore attribute
            to a larger percentage of the overall planes emission.<br />
            <br />
            Car/Motorbike Tabs<br />
            5.What is the most accurate calculation method?<br />
            The carbon footprint from car usage can be calculated using different methods, providing the result in differing levels of accuracy. 
            The combinations are listed in priority order with those at the top providing the most accurate results:<br />
            <spam>a. Type of fuel and the amount of fuel used per annum.<br /></spam>
            <spam>b. Type of Fuel, Annual Mileage and MPG.<br /></spam>
            <spam>c. Annual Mileage and the CO2 g/km figure.<br /></spam>
            <spam>d. Year, Make, Model, Fuel Type and Annual Mileage.<br /></spam>

            If you enter details of the year, make, and model of the vehicle then the official test cycle CO2 g/km emissions factors for that 
            specific vehicle are used in the footprint calculation.<br />
            <br />
            Bus/Rail Tab<br />
            6.Where are the factors for bus and rail taken from?<br />
            The factors used for buses and rail were calculated based on publicly available data from the major service operations, national 
            statistics and the department for transport.<br />
            7.I only have stations and not distances?<br />
            The scope of the calculator only allows distances to be entered therefore please estimate the journeys distance between stations. One 
            way to do this would be to use a web site such a Google maps to calculate the road mileage between the 2 stations.<br />
            <br />
            Secondary Footprint Tab (on the household calculator)<br />
            8.What is a secondary footprint?<br />
            This is a measure of the emissions caused through the manufacture, delivery and disposal of products and services we buy. Most carbon 
            footprint calculators ignore this part of your footprint, but without it you may risk under estimating your total footprint quite 
            considerably.<br />
            9.What factors are used to calculate my secondary footprint?<br />
            The secondary footprint calculator is a high-level tool for estimating the carbon emissions associated with other things we typically 
            spend money on. If you have specific information about the supply chain emissions of any particular product then that source should be 
            used instead.
            Emissions calculations for food take account spend and the likely difference between different diet types e.g. vegan or heavy meat 
            eater by using corrections to the factors provided by Dietary greenhouse gas emissions of meat-eaters, fish-eaters, vegetarians and 
            vegans in the UK, where the following definitions are used :
            High Meat Eater &gt 100g of meat per day (on average)<br />
            Medium Meat Eater = 50 to 100g of meat per day (on average)<br />
            Low Meat Eater &lt 50g of meat per day (on average)<br />
            <br />
            Results Tab<br />
            10.What does the results tab show?<br />
            The results tab compiles the data entered into all other tabs and presents it in an easy-to-read format, displaying your carbon 
            footprint for each element in metric tons of CO2e (carbon dioxide equivalent), alongside your total shown at the bottom. This tab also 
            allows you to proceed to offset the emissions you have generated over your chosen period.<br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Workflow;