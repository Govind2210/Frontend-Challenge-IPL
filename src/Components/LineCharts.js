import React from 'react'
import {ResponsiveContainer , LineChart , Line ,Tooltip , Bar , XAxis ,YAxis} from 'recharts'

const Array = [
  
    {
      "id": 1,
      "season": 2017,
      "city": "Hyderabad",
      "date": "5/4/2017",
      "team1": "Sunrisers Hyderabad",
      "team2": "Royal Challengers Bangalore",
      "toss_winner": "Royal Challengers Bangalore",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Sunrisers Hyderabad",
      "win_by_runs": 35,
      "win_by_wickets": 0,
      "player_of_match": "Yuvraj Singh",
      "venue": "Rajiv Gandhi International Stadium, Uppal",
      "umpire1": "AY Dandekar",
      "umpire2": "NJ Llong",
      "umpire3": ""
    },
    {
      "id": 2,
      "season": 2017,
      "city": "Pune",
      "date": "6/4/2017",
      "team1": "Mumbai Indians",
      "team2": "Rising Pune Supergiant",
      "toss_winner": "Rising Pune Supergiant",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Rising Pune Supergiant",
      "win_by_runs": 0,
      "win_by_wickets": 7,
      "player_of_match": "SPD Smith",
      "venue": "Maharashtra Cricket Association Stadium",
      "umpire1": "A Nand Kishore",
      "umpire2": "S Ravi",
      "umpire3": ""
    },
    {
      "id": 3,
      "season": 2017,
      "city": "Rajkot",
      "date": "7/4/2017",
      "team1": "Gujarat Lions",
      "team2": "Kolkata Knight Riders",
      "toss_winner": "Kolkata Knight Riders",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kolkata Knight Riders",
      "win_by_runs": 0,
      "win_by_wickets": 10,
      "player_of_match": "CA Lynn",
      "venue": "Saurashtra Cricket Association Stadium",
      "umpire1": "Nitin Menon",
      "umpire2": "CK Nandan",
      "umpire3": ""
    },
    {
      "id": 4,
      "season": 2017,
      "city": "Indore",
      "date": "8/4/2017",
      "team1": "Rising Pune Supergiant",
      "team2": "Kings XI Punjab",
      "toss_winner": "Kings XI Punjab",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kings XI Punjab",
      "win_by_runs": 0,
      "win_by_wickets": 6,
      "player_of_match": "GJ Maxwell",
      "venue": "Holkar Cricket Stadium",
      "umpire1": "AK Chaudhary",
      "umpire2": "C Shamshuddin",
      "umpire3": ""
    },
    {
      "id": 5,
      "season": 2017,
      "city": "Bangalore",
      "date": "8/4/2017",
      "team1": "Royal Challengers Bangalore",
      "team2": "Delhi Daredevils",
      "toss_winner": "Royal Challengers Bangalore",
      "toss_decision": "bat",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Royal Challengers Bangalore",
      "win_by_runs": 15,
      "win_by_wickets": 0,
      "player_of_match": "KM Jadhav",
      "venue": "M Chinnaswamy Stadium",
      "umpire1": "",
      "umpire2": "",
      "umpire3": ""
    },
    {
      "id": 6,
      "season": 2017,
      "city": "Hyderabad",
      "date": "9/4/2017",
      "team1": "Gujarat Lions",
      "team2": "Sunrisers Hyderabad",
      "toss_winner": "Sunrisers Hyderabad",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Sunrisers Hyderabad",
      "win_by_runs": 0,
      "win_by_wickets": 9,
      "player_of_match": "Rashid Khan",
      "venue": "Rajiv Gandhi International Stadium, Uppal",
      "umpire1": "A Deshmukh",
      "umpire2": "NJ Llong",
      "umpire3": ""
    },
    {
      "id": 7,
      "season": 2017,
      "city": "Mumbai",
      "date": "9/4/2017",
      "team1": "Kolkata Knight Riders",
      "team2": "Mumbai Indians",
      "toss_winner": "Mumbai Indians",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 0,
      "win_by_wickets": 4,
      "player_of_match": "N Rana",
      "venue": "Wankhede Stadium",
      "umpire1": "Nitin Menon",
      "umpire2": "CK Nandan",
      "umpire3": ""
    },
    {
      "id": 8,
      "season": 2017,
      "city": "Indore",
      "date": "10/4/2017",
      "team1": "Royal Challengers Bangalore",
      "team2": "Kings XI Punjab",
      "toss_winner": "Royal Challengers Bangalore",
      "toss_decision": "bat",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kings XI Punjab",
      "win_by_runs": 0,
      "win_by_wickets": 8,
      "player_of_match": "AR Patel",
      "venue": "Holkar Cricket Stadium",
      "umpire1": "AK Chaudhary",
      "umpire2": "C Shamshuddin",
      "umpire3": ""
    },
    {
      "id": 9,
      "season": 2017,
      "city": "Pune",
      "date": "11/4/2017",
      "team1": "Delhi Daredevils",
      "team2": "Rising Pune Supergiant",
      "toss_winner": "Rising Pune Supergiant",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Delhi Daredevils",
      "win_by_runs": 97,
      "win_by_wickets": 0,
      "player_of_match": "SV Samson",
      "venue": "Maharashtra Cricket Association Stadium",
      "umpire1": "AY Dandekar",
      "umpire2": "S Ravi",
      "umpire3": ""
    },
    {
      "id": 10,
      "season": 2017,
      "city": "Mumbai",
      "date": "12/4/2017",
      "team1": "Sunrisers Hyderabad",
      "team2": "Mumbai Indians",
      "toss_winner": "Mumbai Indians",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 0,
      "win_by_wickets": 4,
      "player_of_match": "JJ Bumrah",
      "venue": "Wankhede Stadium",
      "umpire1": "Nitin Menon",
      "umpire2": "CK Nandan",
      "umpire3": ""
    },
    {
      "id": 11,
      "season": 2017,
      "city": "Kolkata",
      "date": "13/04/17",
      "team1": "Kings XI Punjab",
      "team2": "Kolkata Knight Riders",
      "toss_winner": "Kolkata Knight Riders",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kolkata Knight Riders",
      "win_by_runs": 0,
      "win_by_wickets": 8,
      "player_of_match": "SP Narine",
      "venue": "Eden Gardens",
      "umpire1": "A Deshmukh",
      "umpire2": "NJ Llong",
      "umpire3": ""
    },
    {
      "id": 12,
      "season": 2017,
      "city": "Bangalore",
      "date": "14/04/17",
      "team1": "Royal Challengers Bangalore",
      "team2": "Mumbai Indians",
      "toss_winner": "Mumbai Indians",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 0,
      "win_by_wickets": 4,
      "player_of_match": "KA Pollard",
      "venue": "M Chinnaswamy Stadium",
      "umpire1": "KN Ananthapadmanabhan",
      "umpire2": "AK Chaudhary",
      "umpire3": ""
    },
    {
      "id": 13,
      "season": 2017,
      "city": "Rajkot",
      "date": "14/04/17",
      "team1": "Rising Pune Supergiant",
      "team2": "Gujarat Lions",
      "toss_winner": "Gujarat Lions",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Gujarat Lions",
      "win_by_runs": 0,
      "win_by_wickets": 7,
      "player_of_match": "AJ Tye",
      "venue": "Saurashtra Cricket Association Stadium",
      "umpire1": "A Nand Kishore",
      "umpire2": "S Ravi",
      "umpire3": ""
    },
    {
      "id": 14,
      "season": 2017,
      "city": "Kolkata",
      "date": "15/04/17",
      "team1": "Kolkata Knight Riders",
      "team2": "Sunrisers Hyderabad",
      "toss_winner": "Sunrisers Hyderabad",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kolkata Knight Riders",
      "win_by_runs": 17,
      "win_by_wickets": 0,
      "player_of_match": "RV Uthappa",
      "venue": "Eden Gardens",
      "umpire1": "AY Dandekar",
      "umpire2": "NJ Llong",
      "umpire3": ""
    },
    {
      "id": 15,
      "season": 2017,
      "city": "Delhi",
      "date": "15/04/17",
      "team1": "Delhi Daredevils",
      "team2": "Kings XI Punjab",
      "toss_winner": "Delhi Daredevils",
      "toss_decision": "bat",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Delhi Daredevils",
      "win_by_runs": 51,
      "win_by_wickets": 0,
      "player_of_match": "CJ Anderson",
      "venue": "Feroz Shah Kotla",
      "umpire1": "YC Barde",
      "umpire2": "Nitin Menon",
      "umpire3": ""
    },
    {
      "id": 16,
      "season": 2017,
      "city": "Mumbai",
      "date": "16/04/17",
      "team1": "Gujarat Lions",
      "team2": "Mumbai Indians",
      "toss_winner": "Mumbai Indians",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 0,
      "win_by_wickets": 6,
      "player_of_match": "N Rana",
      "venue": "Wankhede Stadium",
      "umpire1": "A Nand Kishore",
      "umpire2": "S Ravi",
      "umpire3": ""
    },
    {
      "id": 17,
      "season": 2017,
      "city": "Bangalore",
      "date": "16/04/17",
      "team1": "Rising Pune Supergiant",
      "team2": "Royal Challengers Bangalore",
      "toss_winner": "Royal Challengers Bangalore",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Rising Pune Supergiant",
      "win_by_runs": 27,
      "win_by_wickets": 0,
      "player_of_match": "BA Stokes",
      "venue": "M Chinnaswamy Stadium",
      "umpire1": "KN Ananthapadmanabhan",
      "umpire2": "C Shamshuddin",
      "umpire3": ""
    },
    {
      "id": 18,
      "season": 2017,
      "city": "Delhi",
      "date": "17/04/17",
      "team1": "Delhi Daredevils",
      "team2": "Kolkata Knight Riders",
      "toss_winner": "Delhi Daredevils",
      "toss_decision": "bat",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Kolkata Knight Riders",
      "win_by_runs": 0,
      "win_by_wickets": 4,
      "player_of_match": "NM Coulter-Nile",
      "venue": "Feroz Shah Kotla",
      "umpire1": "Nitin Menon",
      "umpire2": "CK Nandan",
      "umpire3": ""
    },
    {
      "id": 19,
      "season": 2017,
      "city": "Hyderabad",
      "date": "17/04/17",
      "team1": "Sunrisers Hyderabad",
      "team2": "Kings XI Punjab",
      "toss_winner": "Kings XI Punjab",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Sunrisers Hyderabad",
      "win_by_runs": 5,
      "win_by_wickets": 0,
      "player_of_match": "B Kumar",
      "venue": "Rajiv Gandhi International Stadium, Uppal",
      "umpire1": "AY Dandekar",
      "umpire2": "A Deshmukh",
      "umpire3": ""
    },
    {
      "id": 20,
      "season": 2017,
      "city": "Rajkot",
      "date": "18/04/17",
      "team1": "Royal Challengers Bangalore",
      "team2": "Gujarat Lions",
      "toss_winner": "Gujarat Lions",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Royal Challengers Bangalore",
      "win_by_runs": 21,
      "win_by_wickets": 0,
      "player_of_match": "CH Gayle",
      "venue": "Saurashtra Cricket Association Stadium",
      "umpire1": "S Ravi",
      "umpire2": "VK Sharma",
      "umpire3": ""
    },
    {
      "id": 21,
      "season": 2017,
      "city": "Hyderabad",
      "date": "19/04/17",
      "team1": "Sunrisers Hyderabad",
      "team2": "Delhi Daredevils",
      "toss_winner": "Sunrisers Hyderabad",
      "toss_decision": "bat",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Sunrisers Hyderabad",
      "win_by_runs": 15,
      "win_by_wickets": 0,
      "player_of_match": "KS Williamson",
      "venue": "Rajiv Gandhi International Stadium, Uppal",
      "umpire1": "CB Gaffaney",
      "umpire2": "NJ Llong",
      "umpire3": ""
    },
    {
      "id": 22,
      "season": 2017,
      "city": "Indore",
      "date": "20/04/17",
      "team1": "Kings XI Punjab",
      "team2": "Mumbai Indians",
      "toss_winner": "Mumbai Indians",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 0,
      "win_by_wickets": 8,
      "player_of_match": "JC Buttler",
      "venue": "Holkar Cricket Stadium",
      "umpire1": "M Erasmus",
      "umpire2": "C Shamshuddin",
      "umpire3": ""
    },
    {
      "id": 23,
      "season": 2017,
      "city": "Kolkata",
      "date": "21/04/17",
      "team1": "Kolkata Knight Riders",
      "team2": "Gujarat Lions",
      "toss_winner": "Gujarat Lions",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Gujarat Lions",
      "win_by_runs": 0,
      "win_by_wickets": 4,
      "player_of_match": "SK Raina",
      "venue": "Eden Gardens",
      "umpire1": "CB Gaffaney",
      "umpire2": "Nitin Menon",
      "umpire3": ""
    },
    {
      "id": 24,
      "season": 2017,
      "city": "Mumbai",
      "date": "22/04/17",
      "team1": "Mumbai Indians",
      "team2": "Delhi Daredevils",
      "toss_winner": "Delhi Daredevils",
      "toss_decision": "field",
      "result": "normal",
      "dl_applied": 0,
      "winner": "Mumbai Indians",
      "win_by_runs": 14,
      "win_by_wickets": 0,
      "player_of_match": "MJ McClenaghan",
      "venue": "Wankhede Stadium",
      "umpire1": "A Nand Kishore",
      "umpire2": "S Ravi",
      "umpire3": ""
    }
]

function LineCharts() {

 
  return (
    <div>
        <h1>Line Chart - Win by Wicket </h1>
        <ResponsiveContainer width="50%" aspect={3} >
            <LineChart data={Array} width={900} hegigh={400}>
                <XAxis dataKey="player_of_match"/>
                <YAxis/>
                <Tooltip/>
                <Line type='monotone' dataKey="win_by_wickets" fill="black" activeDot={{r : 8}}/>
            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}

export default LineCharts