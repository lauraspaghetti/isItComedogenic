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
    ["Sulfosuccinate", 4, 0],
    ["Ethanol", 4, 0],
    ["Ethoxylated Lanolin", 4, 0],
    ["Ethyl Alcohol", 4, 0],
    ["Ethyllhexyl Palmitate", 4, 0],
    ["Flower of Sulfur", 4, 0],
    ["Glyceryl Stereate SE", 4, 0],
    ["Glyceryl-3-Diisostearate", 4, 0],
    ["Hexadecyl Alcohol", 4, 0],
    ["Hexylene Glycol", 4, 0],
    ["Hydrogenated Lanolin", 4, 0],
    ["Hydrogenated Vegetable Oil", 4, 0],
    ["Isocetyl Alcohol", 4, 0],
    ["Isocetyl Stearate", 4, 0],
    ["Isodecyl Oleate", 4, 0],
    ["Isopropyl Alcohol", 4, 0],
    ["Isopropyl Isosterate", 4, 0],
    ["Isopropyl Linolate", 4, 0],
    ["Isopropyl Myristate", 4, 0],
    ["Isopropyl Palmitate", 4, 0],
    ["Isostearic Acid", 4, 0],
    ["Isostearyl Alcohol", 4, 0],
    ["Isostearyl Isostearate", 4, 0],
    ["Isostearyl Neopentanoate", 4, 0],
    ["Laureth-23", 4, 0],
    ["Laureth-4", 4, 0],
    ["Lauric Acid", 4, 0],
    ["Menthol", 4, 0],
    ["CMethanol", 4, 0],
    ["Mink Oil", 4, 0],
    ["Myreth 3 Myristate", 4, 0],
    ["Myristic Acid", 4, 0],
    ["Myristyl Lactate", 4, 0],
    ["Myristyl Myristate", 4, 0],
    ["Octyl Palmitate", 4, 0],
    ["Octyl Stearate", 4, 0],
    ["Oeic Acid", 4, 0],
    ["Oleth-3", 4, 0],
    ["Oleyl Alcohol", 4, 0],
    ["Peach Kernel Oil", 4, 0],
    ["PEG 16 Lanolin", 4, 0],
    ["PEG 200 Dilaurate", 4, 0],
    ["PEG 8 Stearate", 4, 0],
    ["PG Monostearate", 4, 0],
    ["Polyglyceryl-3-Dilsostearate", 4, 0],
    ["Potassium Chloride", 4, 0],
    ["PPG 2 Myristyl Propionate", 4, 0],
    ["Propylene Glycol Monostearate", 4, 0],
    ["Red Algae", 4, 0],
    ["SD Acohol 40", 4, 0],
    ["Shark Liver Oil", 4, 0],
    ["Sodium Chloride", 4, 0],
    ["Sodium Laureth Sulfate", 4, 0],
    ["Sodium Lauryl Sulfate", 4, 0],
    ["Solutan 16", 4, 0],
    ["Sorbitan Oleate", 4, 0],
    ["Soybean Oil", 4, 0],
    ["Steareth 10", 4, 0],
    ["Stearic Acid Tea", 4, 0],
    ["Stearyl Heptanoate", 4, 0],
    ["Sulfated Castor Oil", 4, 0],
    ["Sulfated Jojoba Oil", 4, 0],
    ["Syearyl Heptanoate", 4, 0],
    ["Wheat Germ Glyceride", 4, 0],
    ["Wheat Germ Oil", 4, 0],
    ["Xylene", 4, 0],

]; 

//console.log(ingredients); 

const entryExample= "Acetylated Lanolin Alcohol, alcohol Denat., Algae Extract, Algin, Butyl Stereate, Butylated Hydroxyanisole, Cajeput Oil, Caprylic Acid, Carragean, Cetearyl Acohol + Ceteareth 20, Cetyl Acetate, Cocoa Butter, Coconut Butter, Coconut Oil, Colloidal Sulfur, Cotton Seed Oil, D & C Red # 17, D & C Red # 21, D & C Red # 3, D & C Red # 30, D & C Red # 36, Decyl Oleate, Dioctyl Succinate, Disodium Monooleamido PEG 2-, Sulfosuccinate, Ethanol, Ethoxylated Lanolin, Ethyl Alcohol, Ethyllhexyl Palmitate, Flower of Sulfur, Glyceryl Stereate SE, Glyceryl-3-Diisostearate, Hexadecyl Alcohol, Hexylene Glycol, Hydrogenated Lanolin, Hydrogenated Vegetable Oil, Isocetyl Alcohol, Isocetyl Stearate, Isodecyl Oleate, Isopropyl Alcohol Isopropyl Isosterate, Isopropyl Linolate, Isopropyl Myristate, Isopropyl Palmitate, Isostearic Acid, Isostearyl Alcohol, Isostearyl Isostearate, Isostearyl Neopentanoate, Laureth-23, Laureth-4, Lauric Acid, Menthol, Methanol, Mink Oil, Myreth 3 Myristate, Myristic Acid, Myristyl Lactate, Myristyl Myristate, Octyl Palmitate, Octyl Stearate, Oeic Acid, Oleth-3, Oleyl Alcohol, Peach Kernel Oil, PEG 16 Lanolin, PEG 200 Dilaurate, PEG 8 Stearate, PG Monostearate, Polyglyceryl-3-Dilsostearate, Potassium Chloride, PPG 2 Myristyl Propionate, Propylene Glycol Monostearate, Red Algae, SD Acohol 40, Shark Liver Oil Sodium Chloride, Sodium Laureth Sulfate,, Sodium Lauryl Sulfate, Solutan 16, Sorbitan Oleate, Soybean Oil, Steareth 10, Stearic Acid Tea, Stearyl Heptanoate, Sulfated Castor Oil, Sulfated Jojoba Oil, Syearyl Heptanoate, Wheat Germ Glyceride, Wheat Germ Oil, Xylene";




















































