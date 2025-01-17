
        function sehrleichtBiologiefrage1() {
        const a = document.createElement("p")
        const fragemathe = document.createElement("h3");
        const ant1 = document.createElement("button");
        const ant2 = document.createElement("button");
        const ant3 = document.createElement("button");
          
        ant1.textContent = 'Magen';
        ant2.textContent = 'Herz';
        ant3.textContent = 'Lunge';
        fragemathe.textContent = 'Welches Organ pumpt Blut durch den Körper?'
        
        ant1.onclick = function() {
          antwortFalsch()
          weg1()
          Biologiefrage2()
        }
        ant2.onclick = function() {
          antwortrichtig()
          weg2()
          Biologiefrage2()
        }
        ant3.onclick = function() {
          antwortFalsch()
          weg3()
          Biologiefrage2()
        }
          
        function weg1() {
          document.body.removeChild(ant2)
          document.body.removeChild(ant3)
        }
         function weg2() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant3)
        }
        function weg3() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant2)
        }

        document.body.appendChild(fragemathe)
        document.body.appendChild(a);
        document.body.appendChild(ant1);
        document.body.appendChild(ant2);
        document.body.appendChild(ant3);
            }
              function leichtbiologiefrage1() {
        const a = document.createElement("p")
        const fragemathe = document.createElement("h3");
        const ant2 = document.createElement("button");
        const ant1 = document.createElement("button");
        const ant3 = document.createElement("button");
          
        ant1.textContent = 'grün';
        ant2.textContent = 'schwarz';
        ant3.textContent = 'Gelb';
        fragemathe.textContent = 'Welche Farbe haben die Blätter der meisten Pflanzen im Frühling und Sommer?'
        
        ant1.onclick = function() {
          antwortrichtig()
          weg1()
          Biologiefrage2()
        }
        ant2.onclick = function() {
          antwortFalsch()
          weg2()
          Biologiefrage2()
        }
        ant3.onclick = function() {
          antwortFalsch()
          weg3()
          Biologiefrage2()
        }
          
        function weg1() {
          document.body.removeChild(ant2)
          document.body.removeChild(ant3)
        }
         function weg2() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant3)
        }
        function weg3() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant2)
        }

        document.body.appendChild(fragemathe)
        document.body.appendChild(a);
        document.body.appendChild(ant1);
        document.body.appendChild(ant2);
        document.body.appendChild(ant3);
            }
            
        function Mittelbiologiefrage1() {
        const a = document.createElement("p")
        const fragemathe = document.createElement("h3");
        const ant1 = document.createElement("button");
        const ant2 = document.createElement("button");
        const ant3 = document.createElement("button");
          
        ant1.textContent = 'Weiße blutkörperchen';
        ant2.textContent = 'Rote blutkörperchen';
        ant3.textContent = 'Nervenzellen';
        fragemathe.textContent = 'Welche Zellen sind für die Immunantwort im Körper verantwortlich?'
        
        ant1.onclick = function() {
          antwortrichtig()
          weg1()
          Biologiefrage2()
        }
        ant2.onclick = function() {
          antwortFalsch()
          weg2()
          Biologiefrage2()
        }
        ant3.onclick = function() {
          antwortFalsch()
          weg3()
          Biologiefrage2()
        }
          
        function weg1() {
          document.body.removeChild(ant2)
          document.body.removeChild(ant3)
        }
         function weg2() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant3)
        }
        function weg3() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant2)
        }

        document.body.appendChild(fragemathe)
        document.body.appendChild(a);
        document.body.appendChild(ant1);
        document.body.appendChild(ant2);
        document.body.appendChild(ant3);
            }
            
          function Schwerbiologiefrage1() {
        const a = document.createElement("p")
        const fragemathe = document.createElement("h3");
        const ant1 = document.createElement("button");
        const ant2 = document.createElement("button");
        const ant3 = document.createElement("button");
          
        ant1.textContent = 'Sie helfen bei der Verdauung.';
        ant2.textContent = 'Sie transportieren Sauerstoff.';
        ant3.textContent = 'Sie bekämpfen Krankheiten.';
        fragemathe.textContent = 'Was ist die Funktion von roten Blutkörperchen?'
        
        ant1.onclick = function() {
          antwortrichtig()
          weg1()
          Biologiefrage2()
        }
        ant2.onclick = function() {
          antwortFalsch()
          weg2()
          Biologiefrage2()
        }
        ant3.onclick = function() {
          antwortFalsch()
          weg3()
          Biologiefrage2()
        }
          
        function weg1() {
          document.body.removeChild(ant2)
          document.body.removeChild(ant3)
        }
         function weg2() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant3)
        }
        function weg3() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant2)
        }

        document.body.appendChild(fragemathe)
        document.body.appendChild(a);
        document.body.appendChild(ant1);
        document.body.appendChild(ant2);
        document.body.appendChild(ant3);
            }
            
            
                function Albtraumbiologiefrage1() {
        const a = document.createElement("p")
        const fragemathe = document.createElement("h3");
        const ant1 = document.createElement("button");
        const ant2 = document.createElement("button");
        const ant3 = document.createElement("button");
          
        ant1.textContent = 'Magen';
        ant2.textContent = 'Rückenmark';
        ant3.textContent = 'Gehirn';
        fragemathe.textContent = 'Welcher Teil des Nervensystems ist für die Reflexbewegungen verantwortlich?'
        
        ant1.onclick = function() {
          antwortrichtig()
          weg1()
          Biologiefrage2()
        }
        ant2.onclick = function() {
          antwortFalsch()
          weg2()
          Biologiefrage2()
        }
        ant3.onclick = function() {
          antwortFalsch()
          weg3()
          Biologiefrage2()
        }
          
        function weg1() {
          document.body.removeChild(ant2)
          document.body.removeChild(ant3)
        }
         function weg2() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant3)
        }
        function weg3() {
          document.body.removeChild(ant1)
          document.body.removeChild(ant2)
        }

        document.body.appendChild(fragemathe)
        document.body.appendChild(a);
        document.body.appendChild(ant1);
        document.body.appendChild(ant2);
        
                }
        
