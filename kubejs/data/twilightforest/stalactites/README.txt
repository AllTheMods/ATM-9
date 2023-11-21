Add a new Stalactite entry for hollow hills! This will allow your ores (or even blocks, I don't care what you do) to show up in hollow hills.

Stalactites take 4 entries. The block to use, the size variation, the max length, and the weight. 

Block to use (ore) - the block the stalactite is made of. Value is a string, formatted as "modid:block_name". Example: "minecraft:redstone_block" or "twilightforest:ironwood_block"
Size Variation (size_variation) - a value between 0.0 and 1.0. Defines how much the size of the stalactite should vary. Lower numbers will typically yeild bigger stalactites.
Max Length (max_length) - the max size a stalactite should be. Can be any number, and defines how long the stalactite is max.
Weight (weight) - defines the chance the stalactite will appear. Higher numbers mean your stalactite will appear more often.

In order for your stalactite to be added to Hollow hills, you must put its entry into one of the hill jsons. In the example pack here, we add our example to the small hollow hill pool. You have the option to replace all added entries into a hill if you wish, just simply set the "replace" boolean to true. Note that larger hills inherit stalactites from lower hills, so medium will get all of small's entries and large will inherit all of the medium and small entries. If you want to see your stalactites more often in larger hills, give them a higher weight! 

Feel free to contact me on discord if you have any issues or questions, I would be happy to help! -Gizmo