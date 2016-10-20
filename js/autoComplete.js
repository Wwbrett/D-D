var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    matches = [];

    substrRegex = new RegExp(q, 'i');

    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var spells = ['acid_splash', 'aid', 'alarm', 'alter_self', 'animal_friendship', 'animal_messenger', 'animal_shapes', 'animate_dead', 'animate_objects', 'antilife_shell', 'antimagic_field', 'antipathysympathy', 'arcane_eye', 'arcane_gate', 'arcane_hand', 'arcane_lock', 'arcane_sword', 'arcanists_magic_aura', 'armour_of_agathys', 'arms_of_hadar', 'astral_projection', 'augury', 'aura_of_life', 'aura_of_purity', 'aura_of_vitality', 'awaken', 'bane', 'banishing_smite', 'banishment', 'barkskin', 'beacon_of_hope', 'beast_sense', 'bestow_curse', 'bigbys_crushing_hand', 'blade_barrier', 'bless', 'blight', 'blinding_smite', 'blindnessdeafness', 'blink', 'blur', 'branding_smite', 'burning_hands', 'call_lightning', 'calm_emotions', 'chain_lightning', 'charm_person', 'chill_touch', 'chromatic_orb', 'circle_of_death', 'circle_of_power', 'clairvoyance', 'clone', 'cloud_of_daggers', 'cloudkill', 'color_spray', 'command', 'commune', 'commune_with_nature', 'compelled_duel', 'comprehend_languages', 'compulsion', 'cone_of_cold', 'confusion', 'conjure_animals', 'conjure_barrage', 'conjure_celestial', 'conjure_elemental', 'conjure_fey', 'conjure_minor_elemental', 'conjure_volley', 'conjure_woodland_beings', 'contact_other_plane', 'contagion', 'contingency', 'continual_flame', 'control_water', 'control_weather', 'cordon_of_arrows', 'counterspell', 'create_food_and_water', 'create_or_destroy_water', 'create_undead', 'creation', 'crown_of_madness', 'crusaders_mantle', 'cure_wounds', 'dancing_lights', 'darkness', 'darkvision', 'daylight', 'death_ward', 'delayed_blast_fireball', 'demiplane', 'destructive_wave', 'detect_evil_and_good', 'detect_magic', 'detect_poison_and_disease', 'detect_thoughts', 'dimension_door', 'disguise_self', 'disintegrate', 'dispel_evil_and_good', 'dispel_magic', 'dissonant_whispers', 'divination', 'divine_favor', 'divine_word', 'dominate_beast', 'dominate_monster', 'dominate_person', 'drawmijs_instant_summons', 'dream', 'druidcraft', 'earthquake', 'eldritch_blast', 'elemental_weapon', 'enhance_ability', 'enlargereduce', 'ensnaring_strike', 'entangle', 'enthrall', 'etherealness', 'evards_black_tentacles', 'expeditious_retreat', 'eyebite', 'fabricate', 'faerie_fire', 'false_life', 'fear', 'feather_fall', 'feeblemind', 'find_familiar', 'find_steed', 'find_the_path', 'find_traps', 'finger_of_death', 'fire_bolt', 'fire_shield', 'fire_storm', 'fireball', 'flame_blade', 'flame_strike', 'flaming_sphere', 'flesh_to_stone', 'fly', 'fog_cloud', 'forbiddance', 'forcecage', 'foresight', 'freedom_of_movement', 'friends', 'gaseous_form', 'gate', 'geas', 'gentle_repose', 'giant_insect', 'gilbness', 'globe_of_invulnerability', 'glyph_of_warding', 'goodberry', 'grasping_vine', 'grease', 'greater_invisibility', 'greater_restoration', 'guardian_of_faith', 'guards_and_wards', 'guidance', 'guiding_bolt', 'gust_of_wind', 'hail_of_thorns', 'hallow', 'hallucinatory_terrain', 'harm', 'haste', 'heal', 'healing_word', 'heat_metal', 'hellish_rebuke', 'heroes_feast', 'herosim', 'hex', 'hold_monster', 'hold_person', 'holy_aura', 'hunger_of_hadar', 'hunters_mark', 'hypnotic_pattern', 'ice_storm', 'identify', 'illusionary_script', 'imprisonment', 'incendiary_cloud', 'infict_wounds', 'insect_plague', 'invisibility', 'jump', 'knock', 'legend_lore', 'leominds_secret_chest', 'leomunds_tiny_hut', 'lesser_restoration', 'levitate', 'light', 'lightning_arrow', 'lightning_bolt', 'locate_animals_or_plants', 'locate_creature', 'locate_object', 'longstrider', 'mage_armor', 'mage_hand', 'magic_circle', 'magic_jar', 'magic_missile', 'magic_mouth', 'magic_weapon', 'major_image', 'mass_cure_wounds', 'mass_heal', 'mass_healing_word', 'mass_suggestion', 'maze', 'meld_into_stone', 'melfs_acid_arrow', 'mending', 'message', 'meteor_swarm', 'mind_blank', 'minor_illusion', 'mirage_arcane', 'mirror_image', 'mislead', 'misty_step', 'modify_memory', 'moonbeam', 'mordenkainens_faithful_hound',  'mordenkainens_magnificent_mansion', 'mordenkainens_private_sanctum', 'move_earth', 'nondetection', 'otilukes_freezing_sphere', 'otilukes_resilient_sphere', 'ottos_irresistable_dance', 'pass_without_trace', 'passwall', 'phantasmal_killer', 'phantom_steed', 'planar_ally', 'planar_binding', 'plane_shift', 'plant_growth', 'poison_spray', 'polymorph', 'power_word_kill', 'power_word_stun', 'prayer_of_healing', 'prestidigitation', 'prismatic_spray', 'prismatic_wall', 'produce_flame', 'programmed_illusion', 'project_image', 'protection_from_evil_and_good', 'protection_from_poison', 'purify_food_and_drink', 'raise_dead', 'rarys_telepathic_bond', 'ray_of_enfeeblement', 'ray_of_frost', 'regenerate', 'reincarnate', 'remove_curse', 'resistane', 'ressurection', 'reverse_gravity', 'revivify', 'rope_trick', 'sacred_flame', 'sanctuary', 'scorching_ray', 'scrying', 'see_invisibility', 'seeming', 'sending', 'sequester', 'shapechange', 'shatter', 'shield', 'shield_of_faith', 'shilelagh', 'shocking_grasp', 'silence', 'silent_image', 'simularcrum', 'sleep', 'sleet_storm', 'slow', 'spare_the_dying', 'speak_with_animals', 'speak_with_plants', 'spider_climb', 'spike_growth', 'spirit_guardians', 'spiritual_weapon', 'stinking_cloud', 'stone_shape', 'stoneskin', 'storm_of_vengeance', 'suggestion', 'sunbeam', 'sunburst', 'symbol', 'tashas_hideous_laughter', 'telekinesis', 'teleport', 'teleportation_circle', 'tensers_floating_disk', 'thaumaturgy', 'thunderwave', 'time_stop', 'tongues', 'transport_via_plants', 'tree_stride', 'true_stride', 'true_polymorph', 'true_seeing', 'true_strike', 'unseen_servant', 'vampiric_touch', 'vicious_mockery', 'wall_of_fire', 'wall_of_force', 'wall_of_stone', 'wall_of_thorns', 'warding_bond', 'water_breathing', 'water_walk', 'web', 'weird', 'wind_walk','wind_wall', 'wish', 'word_of_recall', 'zone_of_truth'
];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'spells',
  source: substringMatcher(spells)
});