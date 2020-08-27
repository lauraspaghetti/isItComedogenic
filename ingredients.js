console.log('ingredients.js'); 

//Let's store all the comedogenic and irritative ingredients with their comedogenic/iritation rate in an array
let ingredients = [
    //The first number of each arrays stands for the comedogenic rate
    //The second number of each arrays stands for the iritation rate
    ["acetylated lanolin", 4, 0], 
    ["alcohol", 0, 5], 
    ["algae extract", 5, 0], 
    ["algin", 4, 4],
    ["butyl stereate", 3, 0], 
    ["butylated hydroxyanisole", 2, 3], 
    ["cajeput oil", 2, 4],
    ["caprylic acid", 1, 3],
    ["carragean", 5, 0],
    ["cetearyl acohol + ceteareth 20", 4, 0],
    ["cetyl acetate", 4, 0],
    ["cocoa butter", 4, 0],
    ["coconut butter", 4, 0],
    ["coconut oil", 4, 0],
    ["colloidal sulfur", 4, 0],
    ["cotton seed oil", 4, 0],
    ["d & c red # 17", 4, 0],
    ["d & c red # 21", 4, 0],
    ["d & c red # 3", 4, 0],
    ["d & c red # 30", 4, 0],
    ["d & c red # 36", 4, 0],
    ["decyl oleate", 4, 0],
    ["dioctyl succinate", 4, 0],
    ["disodium monooleamido peg 2-", 4, 0],
    ["sulfosuccinate", 4, 0],
    ["ethanol", 0, 4],
    ["ethoxylated lanolin", 4, 0],
    ["ethyl alcohol", 4, 0],
    ["ethyllhexyl palmitate", 4, 0],
    ["flower of sulfur", 4, 0],
    ["glyceryl stereate se", 4, 0],
    ["glyceryl-3-diisostearate", 4, 0],
    ["hexadecyl alcohol", 4, 0],
    ["hexylene glycol", 4, 0],
    ["hydrogenated lanolin", 4, 0],
    ["hydrogenated vegetable oil", 4, 0],
    ["isocetyl alcohol", 4, 0],
    ["isocetyl stearate", 4, 0],
    ["isodecyl oleate", 4, 0],
    ["isopropyl alcohol", 4, 0],
    ["isopropyl isosterate", 4, 0],
    ["isopropyl linolate", 4, 0],
    ["isopropyl myristate", 4, 0],
    ["isopropyl palmitate", 4, 0],
    ["isostearic acid", 4, 0],
    ["isostearyl alcohol", 4, 0],
    ["isostearyl isostearate", 4, 0],
    ["isostearyl neopentanoate", 4, 0],
    ["laureth-23", 4, 0],
    ["laureth-4", 4, 0],
    ["lauric acid", 4, 0],
    ["menthol", 4, 0],
    ["methanol", 4, 0],
    ["mink oil", 4, 0],
    ["myreth 3 myristate", 4, 0],
    ["myristic acid", 4, 0],
    ["myristyl lactate", 4, 0],
    ["myristyl myristate", 4, 0],
    ["octyl palmitate", 4, 0],
    ["octyl stearate", 4, 0],
    ["oeic acid", 4, 0],
    ["oleth-3", 4, 0],
    ["oleyl alcohol", 4, 0],
    ["peach kernel oil", 4, 0],
    ["peg 16 lanolin", 4, 0],
    ["peg 200 dilaurate", 4, 0],
    ["peg 8 stearate", 4, 0],
    ["pg monostearate", 4, 0],
    ["polyglyceryl-3-dilsostearate", 4, 0],
    ["potassium chloride", 4, 0],
    ["ppg 2 myristyl propionate", 4, 0],
    ["propylene glycol monostearate", 4, 0],
    ["red algae", 4, 0],
    ["sd acohol 40", 4, 0],
    ["shark liver oil", 4, 0],
    ["sodium chloride", 4, 0],
    ["sodium laureth sulfate", 4, 0],
    ["sodium lauryl sulfate", 4, 0],
    ["solutan 16", 4, 0],
    ["sorbitan oleate", 4, 0],
    ["soybean oil", 4, 0],
    ["steareth 10", 4, 0],
    ["stearic acid tea", 4, 0],
    ["stearyl heptanoate", 4, 0],
    ["sulfated castor oil", 4, 0],
    ["sulfated jojoba oil", 4, 0],
    ["syearyl heptanoate", 4, 0],
    ["wheat germ glyceride", 4, 0],
    ["wheat germ oil", 4, 0],
    ["xylene", 4, 0],

]; 

//console.log(ingredients.length); 

const entryExample= "Acetylated Lanolin, alcohol Denat., Algae Extract, Algin, Butyl Stereate, Butylated Hydroxyanisole, Cajeput Oil, Caprylic Acid, Carragean, Cetearyl Acohol + Ceteareth 20, Cetyl Acetate, Cocoa Butter, Coconut Butter, Coconut Oil, Colloidal Sulfur, Cotton Seed Oil, D & C Red # 17, D & C Red # 21, D & C Red # 3, D & C Red # 30, D & C Red # 36, Decyl Oleate, Dioctyl Succinate, Disodium Monooleamido PEG 2-, Sulfosuccinate, Ethanol, Ethoxylated Lanolin, Ethyl Alcohol, Ethyllhexyl Palmitate, Flower of Sulfur, Glyceryl Stereate SE, Glyceryl-3-Diisostearate, Hexadecyl Alcohol, Hexylene Glycol, Hydrogenated Lanolin, Hydrogenated Vegetable Oil, Isocetyl Alcohol, Isocetyl Stearate, Isodecyl Oleate, Isopropyl Alcohol Isopropyl Isosterate, Isopropyl Linolate, Isopropyl Myristate, Isopropyl Palmitate, Isostearic Acid, Isostearyl Alcohol, Isostearyl Isostearate, Isostearyl Neopentanoate, Laureth-23, Laureth-4, Lauric Acid, Menthol, Methanol, Mink Oil, Myreth 3 Myristate, Myristic Acid, Myristyl Lactate, Myristyl Myristate, Octyl Palmitate, Octyl Stearate, Oeic Acid, Oleth-3, Oleyl Alcohol, Peach Kernel Oil, PEG 16 Lanolin, PEG 200 Dilaurate, PEG 8 Stearate, PG Monostearate, Polyglyceryl-3-Dilsostearate, Potassium Chloride, PPG 2 Myristyl Propionate, Propylene Glycol Monostearate, Red Algae, SD Acohol 40, Shark Liver Oil, Sodium Chloride, Sodium Laureth Sulfate, Sodium Lauryl Sulfate, Solutan 16, Sorbitan Oleate, Soybean Oil, Steareth 10, Stearic Acid Tea, Stearyl Heptanoate, Sulfated Castor Oil, Sulfated Jojoba Oil, Syearyl Heptanoate, Wheat Germ Glyceride, Wheat Germ Oil, Xylene";