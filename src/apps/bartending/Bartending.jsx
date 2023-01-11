import React, { useState } from "react";
import "./bartending.scss";

const Bartending = () => {
  

  const [recipe, setRecipe] = useState(0);
  const [ming, setMing] = useState(true);
  const [sesame, setSesame] = useState(     true);
  const [coldbrew, setColdBrew] = useState(     true);
  const [montenegro, setMontenegro] = useState(     true);
  const [vodka, setvodka] = useState(     true);
  const [gin, setGin] = useState(     true);
  const [rum, setRum] = useState(     true);
  const [tequila, setTequila] = useState(     true);
  const [triplesec, setTriplesec] = useState(     true);
  const [buffulo, setBuffulo] = useState(     true);
  const [mezcal, setMezcal] = useState(     true);
  const [chile, setChile] = useState(     true);
  const [merlet, setMerlet] = useState(     true);
  const [honey, setHoney] = useState(     true);
  const [blake, setBlake] = useState(     true);
  const [cafe, setCafe] = useState(     true);
  const [titos, setTitos] = useState(     true);
  const [casa, setCasa] = useState(     true);
  const [zacapa, setZacapa] = useState(     true);
  const [chart, setChart] = useState(     true);
  const [amaro, setAmaro] = useState(     true);
  const [port, setPort] = useState(     true);
  const [tanq, setTanq] = useState(     true);
  const [tea, setTea] = useState(     true);
  const [vodkaa, setVodkaa] = useState(     true);
  const [rasp, setRasp] = useState(     true);
  const [dead, setDead] = useState(     true);
  const [jala, setJala] = useState(     true);
  const [walnut, setWalnut] = useState(     true);
  const [orange, setOrange] = useState(     true);
  const [limon, setLimon] = useState(     true);
  const [marach, setMarach] = useState(     true);
  const [orchid, setOrchid] = useState(     true);
  const [thyme, setThyme] = useState(     true);
  const [jala2, setJala2] = useState(     true);
  const [olive, setOlive] = useState(     true);
  const [lime, setLime] = useState(     true);
  const [lemon, setLemon] = useState(     true);
  const [lime2, setLime2] = useState(     true);
  const [lemon2, setLemon2] = useState(     true);
  const [prick, setPrick] = useState(     true);
  const [oleo, setOleo] = useState(     true);

  const [sp, setSP] = useState(     true);
  const [pine2, setPine2] = useState(     true);
  const [grape, setGrape] = useState(     true);
  const [dhy, setDhy] = useState(     true);
  const [coffee, setCoffee] = useState(     true);
  const [nutmeg, setNutmeg] = useState(     true);
  const [pine, setPine] = useState(     true);
  const [simple, setSimple] = useState(     true);
  const [cinn, setCinn] = useState(     true);
  const [agave, setAgave] = useState(     true);
  const [sweet, setSweet] = useState(     true);
  const [hendricks, setHendricks] = useState(     true);
  const [gents, setGents] = useState(     true);
  const [repo, setRepo] = useState(     true);
  const [orange2, setOrange2] = useState(     true);
  const [ango, setAngo] = useState(     true);
  const [walnut2, setWalnut2] = useState(     true);
  const [pepper, setPepper] = useState(     true);
  const [peych, setPeych] = useState(     true);

const handleMassChange = () => {
  setvodka(true)
setGin(true)
setRum(true)
setTequila(true)
setTriplesec(true)
setBuffulo(true)
setMezcal(true)
setChile(true)
setMerlet(true)
setHoney(true)
setBlake(true)
setCafe(true)
setTitos(true)
setCasa(true)
setZacapa(true)
setChart(true)
setAmaro(true)
setPort(true)
setTanq(true)
setTea(true)
setVodkaa(true)
setRasp(true)
setDead(true)
setJala(true)
setWalnut(true)
setOrange(true)
setLimon(true)
setMarach(true)

setMing(true)
setMontenegro(true)
setOrchid(true);
setThyme(true)
setJala2(true)
setOlive(true)
setLime(true)
setLemon(true)
setLime2(true)
setLemon2(true)
setPrick(true)
setOleo(true)
setSesame(true)
setColdBrew(true)
setSP(true)
setPine2(true)
setGrape(true)
setDhy(true)
setCoffee(true)
setNutmeg(true)
setPine(true)
setSimple(true)
setCinn(true)
setAgave(true)
setSweet(true)
setHendricks(true)
setGents(true)
setRepo(true)
setOrange2(true)
setAngo(true)
setWalnut2(true)
setPepper(true)
setPeych(true)
}


  const handleRecipe1 = () => {
handleMassChange();
    setPort(false);
    setTanq(false);
    setOleo(false)
    setLemon(false)
    setPepper(false)
    setLemon2(false)
  };

  const handleRecipe2 = () => {
handleMassChange();
    setvodka(false);
    setOrange(false);
    setCafe(false);
    setBlake(false);
    setColdBrew(false)
    setCoffee(false)
  };
  const handleRecipe3 = () => {
handleMassChange();
    setHoney(false);
    setMerlet(false);
    setOrange(false);
    setMing(false);
    setAngo(false)
    setSesame(false)
    setGrape(false)
    setLime(false)
    setOrchid(false)
  };
  const handleRecipe4 = () => {
    handleMassChange();
    setMezcal(false);
    setTriplesec(false);
    setOrange(false);
    setMontenegro(false);
    setDhy(false)
    setOrchid(false)
  };
  const handleRecipe5 = () => {
    handleMassChange();
    setGents(false);
    setLemon(false)
    setAngo(false)
    setLemon2(false)

  };
  const handleRecipe6 = () => {
    handleMassChange();
    setWalnut(false);
    setDead(false);
    setSP(false)
    setNutmeg(false)

  };
  const handleRecipe7 = () => {
    handleMassChange();
    setVodkaa(false);
    setRasp(false);
    setLemon(false)
    setPine(false)
    setThyme(false)

  };
  const handleRecipe8 = () => {
    handleMassChange();
    setMarach(false);
    setGin(false);
    setSweet(false)
    setLemon(false)
    setPrick(false)
    setLemon2(false)

  };
  const handleRecipe9 = () => {
    handleMassChange();
    setMezcal(false);
    setLimon(false);
    setHendricks(false)
    setLemon(false)
    setSimple(false)

  };
  const handleRecipe10 = () => {
    handleMassChange();
    setZacapa(false);
    setChart(false);
    setAmaro(false);

  };
  const handleRecipe11 = () => {
    handleMassChange();
    setTequila(false);
    setMezcal(false);
    setJala(false);
    setGrape(false)
    setLime(false)
    setCinn(false)
    setJala2(false)
 
  };
  const handleRecipe12 = () => {
    handleMassChange();
setRepo(false)
setSimple(false)
setLime(false)
  };

  const recipes = [
    {
      Name: "",
      liquor: "",
      liquor1: "Vodka",
      liquor2: "",
      liquor3: "",
      liquor4: "",
      mixer1: "",
      mixer2: "",
      mixer3: "",
      mixer4: "",
      prep: "",
      glass: "",
      garnish: "",
    },
    {
      Name: "Portland Tonic",

      liquor1: "1oz White Port",
      liquor2: "1 1/2 Tanqueray",
      liquor3: "",
      liquor4: "",
      mixer1: "1/4 Oleo",
      mixer2: "1/4 Lemon",
      mixer3: "",
      mixer4: "",
      prep: "Shake - Dirty Dump",
      glass: "Wine Glass",
      garnish: "Peppercorn + Lemon",
    },
    {
      Name: "Up All Night",

      liquor1: "1 1/2 Vodka",
      liquor2: "3/4 Orangeat",
      liquor3: "1/2 Cafe Mocha",
      liquor4: "1/2 Mr Blake",
      mixer1: "1oz Cold Brew",
      mixer2: "",
      mixer3: "",
      mixer4: "",
      prep: "Shake - No Strain",
      glass: "Coupe",
      garnish: "3 Coffee Beans",
    },
    {
      Name: "Kings Cup",

      liquor1: "1 1/2 Honeydew",
      liquor2: "1 1/2 Brandy",
      liquor3: "1/2 Ming River",
      liquor4: "1/4 Orangeat",
      mixer1: "Ango Bitters",
      mixer2: "3/4 Sesame Syrup",
      mixer3: "1 1/2 Grapefruit",
      mixer4: "1/2 Lime",
      prep: "",
      glass: "Tiki Mug",
      garnish: "Leaves + Orchid",
    },
    {
      Name: "The Rebel Genius",

      liquor1: "1 1/2 Mezcal",
      liquor2: "1/2 Orangeat",
      liquor3: "3/4 Triple Sec",
      liquor4: "1/2 Montenegro Float",
      mixer1: "3/4 Lime",
      mixer2: "",
      mixer3: "",
      mixer4: "",
      prep: "Shake",
      glass: "Rocks w/ Big Cube",
      garnish: "Dehydrated Lime + Orchid",
    },
    {
      Name: "Tennesee Buck",

      liquor1: "2 Gentlemans Jack",
      liquor2: "",
      liquor3: "",
      liquor4: "",
      mixer1: "3/4 lemon",
      mixer2: "1/2 Honey Syrup",
      mixer3: "2 Muddled Strawberries",
      mixer4: "Top with ginger beer",
      prep: "Shake",
      glass: "Collins w/ Ice",
      garnish: "Lemon Peel + Ango Float",
    },
    {
      Name: "Sweet Potato Old Fashioned",

      liquor1: "1/2 Black Walnut",
      liquor2: "2 Rye",
      liquor3: "",
      liquor4: "",
      mixer1: "Walnut Bitters",
      mixer2: "3/4 Sweet Potato",
      mixer3: "",
      mixer4: "",
      prep: "Stir",
      glass: "Rocks w/ Big Cube",
      garnish: "Nutmeg",
    },
    {
      Name: "The French Impression",

      liquor1: "2 Vodka+",
      liquor2: "1/2 Razz",
      liquor3: "",
      liquor4: "",
      mixer1: "1/4 Lemon",
      mixer2: "1 1/2 Pineapple",
      mixer3: "",
      mixer4: "",
      prep: "Shake",
      glass: "Coupe",
      garnish: "Thyme",
    },
    {
      Name: "Prickly Pear Martinez",

      liquor1: "1/2 Sweet Vermouth",
      liquor2: "1/4 Marachino",
      liquor3: "1 1/2 Gin",
      liquor4: "",
      mixer1: "1/4 Lemon",
      mixer2: "1/4 Prickly Pear",
      mixer3: "",
      mixer4: "",
      prep: "Shake",
      glass: "Rocks w/ Ice",
      garnish: "Lemon Twist",
    },
    {
      Name: "Lemon Drop",

      liquor1: "2 Hendricks",
      liquor2: "1/4 Limoncello",
      liquor3: "1/4 Cointreau",
      liquor4: "",
      mixer1: "3/4 Lemon",
      mixer2: "1/2 Simple",
      mixer3: "",
      mixer4: "",
      prep: "Shake",
      glass: "Coupe",
      garnish: "None",
    },
    {
      Name: "Tea And Smoke",

      liquor1: "1 1/2 Zacapa",
      liquor2: "1/2 Yellow Chatreuse",
      liquor3: "1 1/2 Amaro Blend",
      liquor4: "",
      mixer1: "",
      mixer2: "",
      mixer3: "",
      mixer4: "",
      prep: "Stir",
      glass: "Nick & Nora",
      garnish: "Bergomot Flavor",
    },
    {
      Name: "Spice and Everything Nice",

      liquor1: "1 Well Tequila",
      liquor2: "1/2 Mezcal",
      liquor3: "1/4 Jalapeno Tequila",
      liquor4: "",
      mixer1: "1 Grapefruit",
      mixer2: "1/4 Lime",
      mixer3: "1/2 Cinnamon Simple",
      mixer4: "",
      prep: "Shake",
      glass: "Tulip W/Ice",
      garnish: "Jala Slices",
    },
    {
      Name: "Paradox of Choice",

      liquor1: "2 Reposado",
      liquor2: "1/2 benedictine",
      liquor3: "",
      liquor4: "",
      mixer1: "1/4 simple",
      mixer2: "3/4 lime",
      mixer3: "",
      mixer4: "",
      prep: "Shake",
      glass: "Coupe",
      garnish: "Red Wine Float",
    },
  ];

  return (
    <div className="outerBartending">
      <div>
        {recipes.slice(recipe, recipe + 1).map((rec) => {
          return (
            <div className="recipes">
              <span style={{ fontWeight: "bold" }}>{rec.Name}</span><hr style={{width: "40%"}}/>        
              <span>{rec.liquor1}</span>
              <br />
              <span>{rec.liquor2}</span>
              <br />
              <span>{rec.liquor3}</span>
              <br />
              <span>{rec.liquor4}</span>
              <hr style={{width: "40%"}}/>
              <br />
              <span>{rec.mixer1}</span>
              <br />
              <span>{rec.mixer2}</span>
              <br />
              <span>{rec.mixer3}</span>
              <br />
              <span>{rec.mixer4}</span>
              <hr style={{width: "40%"}}/>
              <span>{rec.prep}</span>
              <br />
              <span>{rec.glass}</span>
              <br />
              <span>{rec.garnish}</span>
              <br />
            </div>
          );
        })}
      </div>
      <div className="sideBar">
        <div className="railRowGarnish">
          <div className={orchid ? "bottles" : "bottlesActive"}
            onClick={() => setOrchid(!orchid)}>orchid</div>
          <div             className={thyme ? "bottles" : "bottlesActive"}
            onClick={() => setThyme(!thyme)}>Thyme</div>
          <div             className={jala2 ? "bottles" : "bottlesActive"}
            onClick={() => setJala2(!jala2)}>jala</div>
          <div             className={olive ? "bottles" : "bottlesActive"}
            onClick={() => setOlive(!olive)}>olive</div>
          <div             className={lime2 ? "bottles" : "bottlesActive"}
            onClick={() => setLime2(!lime2)}>lime</div>
          <div             className={lemon2 ? "bottles" : "bottlesActive"}
            onClick={() => setLemon2(!lemon2)}>lemon</div>
        </div>
        <div className="railRowGarnish">
          <div             className={dhy ? "bottles" : "bottlesActive"}
            onClick={() => setDhy(!dhy)}>DHY</div>
<div             className={coffee ? "bottles" : "bottlesActive"}
            onClick={() => setCoffee(!coffee)}>Coffee</div>
          <div             className={nutmeg ? "bottles" : "bottlesActive"}
            onClick={() => setNutmeg(!nutmeg)}>Nutmeg</div>
          
          <div             className={pine2 ? "bottles" : "bottlesActive"}
            onClick={() => setPine2(!pine2)}>Pine</div>
        </div>
 
        <div className="mixerGroup">        <div className="railRowExtras">
   
          <div             className={ming ? "bottles" : "bottlesActive"}
            onClick={() => setMing(!ming)}>ming</div>
                      <div             className={montenegro ? "bottles" : "bottlesActive"}
            onClick={() => setMontenegro(!montenegro)}>monte</div>
          <div             className={honey ? "bottles" : "bottlesActive"}
            onClick={() => setHoney(!honey)}>honey</div>
          <div             className={gents ? "bottles" : "bottlesActive"}
            onClick={() => setGents(!gents)}>Gents</div>
          <div             className={agave ? "bottles" : "bottlesActive"}
            onClick={() => setAgave(!agave)}>Agave</div>
          <div             className={sweet ? "bottles" : "bottlesActive"}
            onClick={() => setSweet(!sweet)}>Sweet</div>
          <div             className={cinn ? "bottles" : "bottlesActive"}
            onClick={() => setCinn(!cinn)}>cinn</div>
          <div             className={simple ? "bottles" : "bottlesActive"}
            onClick={() => setSimple(!simple)}>simple</div>
                      <div             className={repo ? "bottles" : "bottlesActive"}
            onClick={() => setRepo(!repo)}>repo</div>
                      <div             className={sesame ? "bottles" : "bottlesActive"}
            onClick={() => setSesame(!sesame)}>sesame</div>
                      <div             className={coldbrew ? "bottles" : "bottlesActive"}
            onClick={() => setColdBrew(!coldbrew)}>Cold</div>
                                  <div             className={hendricks ? "bottles" : "bottlesActive"}
            onClick={() => setHendricks(!hendricks)}>Hend</div>

        </div>
        <div className="railRowMixers">
        <div             className={oleo ? "bottles" : "bottlesActive"}
            onClick={() => setOleo(!oleo)}>Oleo</div>
          <div             className={prick ? "bottles" : "bottlesActive"}
            onClick={() => setPrick(!prick)}>Prick</div>
          <div             className={sp ? "bottles" : "bottlesActive"}
            onClick={() => setSP(!sp)}>Sweet</div>
          <div             className={olive ? "bottles" : "bottlesActive"}
            onClick={() => setOlive(!olive)}>Olive</div>
          <div             className={grape ? "bottles" : "bottlesActive"}
            onClick={() => setGrape(!grape)}>Grape</div>
          <div             className={pine ? "bottles" : "bottlesActive"}
            onClick={() => setPine(!pine)}>Pine</div>
          <div             className={lime ? "bottles" : "bottlesActive"}
            onClick={() => setLime(!lime)}>Lime</div>
          <div             className={lemon ? "bottles" : "bottlesActive"}
            onClick={() => setLemon(!lemon)}>Lemon</div>
        </div>
        <div className="railRowBitters">
        <div             className={orange2 ? "bottles" : "bottlesActive"}
            onClick={() => setOrange2(!orange2)}>Orange</div>
          <div             className={ango ? "bottles" : "bottlesActive"}
            onClick={() => setAngo(!ango)}>Ango</div>
          <div             className={walnut2 ? "bottles" : "bottlesActive"}
            onClick={() => setWalnut2(!walnut2)}>Walnut</div>
          <div             className={pepper ? "bottles" : "bottlesActive"}
            onClick={() => setPepper(!pepper)}>Pepper</div>
          <div             className={peych ? "bottles" : "bottlesActive"}
            onClick={() => setPeych(!peych)}>Peych</div>


        </div></div>
 
      </div>
      <div className="rail">
        <div className="railRow">
          <div
            className={recipe === 1 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(1), handleRecipe1()]}
          >
            1
          </div>
          <div
            className={recipe === 2 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(2), handleRecipe2()]}
          >
            2
          </div>
          <div
            className={recipe === 3 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(3), handleRecipe3()]}
          >
            3
          </div>
          <div
            className={recipe === 4 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(4), handleRecipe4()]}
          >
            4
          </div>
          <div
            className={recipe === 5 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(5), handleRecipe5()]}
          >
            5
          </div>
          <div
            className={recipe === 6 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(6), handleRecipe6()]}
          >
            6
          </div>
          <div
            className={recipe === 7 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(7), handleRecipe7()]}
          >
            7
          </div>
          <div
            className={recipe === 8 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(8), handleRecipe8()]}
          >
            8
          </div>
          <div
            className={recipe === 9 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(9), handleRecipe9()]}
          >
            9
          </div>
          <div
            className={recipe === 10 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(10), handleRecipe10()]}
          >
            10
          </div>
          <div
            className={recipe === 11 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(11), handleRecipe11()]}
          >
            11
          </div>
          <div
            className={recipe === 12 ? "bottlesActive" : "bottles"}
            onClick={() => [setRecipe(12), handleRecipe12()]}
          >
            12
          </div>
        </div>
        <div className="railRow">
          <div
            className={casa ? "bottles" : "bottlesActive"}
            onClick={() => setCasa(!casa)}
          >
            Casa
          </div>
          <div
            className={titos ? "bottles" : "bottlesActive"}
            onClick={() => setTitos(!titos)}
          >
            titos
          </div>
          <div
            className={cafe ? "bottles" : "bottlesActive"}
            onClick={() => setCafe(!cafe)}
          >
            Cafe
          </div>
          <div
            className={blake ? "bottles" : "bottlesActive"}
            onClick={() => setBlake(!blake)}
          >
            Blake
          </div>
          <div
            className={honey ? "bottles" : "bottlesActive"}
            onClick={() => setHoney(!honey)}
          >
            Honey
          </div>
          <div
            className={merlet ? "bottles" : "bottlesActive"}
            onClick={() => setMerlet(!merlet)}
          >
            Merlet
          </div>
          <div className="vLine"></div>
          <div
            className={chile ? "bottles" : "bottlesActive"}
            onClick={() => setChile(!chile)}
          >
            Chile
          </div>
          <div
            className={mezcal ? "bottles" : "bottlesActive"}
            onClick={() => setMezcal(!mezcal)}
          >
            Mezcal
          </div>
          <div
            className={buffulo ? "bottles" : "bottlesActive"}
            onClick={() => setBuffulo(!buffulo)}
          >
            Buffulo
          </div>
          <div
            className={triplesec ? "bottles" : "bottlesActive"}
            onClick={() => setTriplesec(!triplesec)}
          >
            Triple
          </div>

          <div
            className={tequila ? "bottles" : "bottlesActive"}
            onClick={() => setTequila(!tequila)}
          >
            Tequila
          </div>
          <div
            className={rum ? "bottles" : "bottlesActive"}
            onClick={() => setRum(!rum)}
          >
            Rum
          </div>
          <div
            className={gin ? "bottles" : "bottlesActive"}
            onClick={() => setGin(!gin)}
          >
            Gin
          </div>
          <div
            className={vodka ? "bottles" : "bottlesActive"}
            onClick={() => setvodka(!vodka)}
          >
            Vodka
          </div>
        </div>

        <div className="railRow">
          <div
            className={marach ? "bottles" : "bottlesActive"}
            onClick={() => setMarach(!marach)}
          >
            Marach
          </div>
          <div
            className={limon ? "bottles" : "bottlesActive"}
            onClick={() => setLimon(!limon)}
          >
            Limon
          </div>
          <div
            className={orange ? "bottles" : "bottlesActive"}
            onClick={() => setOrange(!orange)}
          >
            Orange
          </div>{" "}
          <div
            className={walnut ? "bottles" : "bottlesActive"}
            onClick={() => setWalnut(!walnut)}
          >
            walnut
          </div>
          <div
            className={jala ? "bottles" : "bottlesActive"}
            onClick={() => setJala(!jala)}
          >
            Jala
          </div>
          <div
            className={dead ? "bottles" : "bottlesActive"}
            onClick={() => setDead(!dead)}
          >
            Dead
          </div>      <div className="vLine"></div>
          <div
            className={rasp ? "bottles" : "bottlesActive"}
            onClick={() => setRasp(!rasp)}
          >
            Rasp
          </div>
          <div
            className={vodkaa ? "bottles" : "bottlesActive"}
            onClick={() => setVodkaa(!vodkaa)}
          >
            Vodka+
          </div>
          <div
            className={tea ? "bottles" : "bottlesActive"}
            onClick={() => setTea(!tea)}
          >
            Tea
          </div>
          <div
            className={tanq ? "bottles" : "bottlesActive"}
            onClick={() => setTanq(!tanq)}
          >
            Tanq
          </div>
          <div
            className={port ? "bottles" : "bottlesActive"}
            onClick={() => setPort(!port)}
          >
            Port
          </div>
          <div
            className={amaro ? "bottles" : "bottlesActive"}
            onClick={() => setAmaro(!amaro)}
          >
            Amaro
          </div>
          <div
            className={chart ? "bottles" : "bottlesActive"}
            onClick={() => setChart(!chart)}
          >
            Chart
          </div>
          <div
            className={zacapa ? "bottles" : "bottlesActive"}
            onClick={() => setZacapa(!zacapa)}
          >
            Zacapa
          </div>
        </div>
      </div>
      <button style={{position: "fixed", bottom: "100px", left: "10px"}} onClick={()=> handleMassChange()}>Reset</button>
    </div>
  );
};

export default Bartending;