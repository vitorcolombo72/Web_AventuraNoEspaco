extends Control

@export var levels_table_path: String

var levels_selection_screen: PackedScene
var student_name_screen: PackedScene
var godot_bridge
var my_callback

func _ready():
	if Engine.has_singleton("JavaScriptBridge"):
		my_callback = JavaScriptBridge.create_callback(_on_js_message)
		godot_bridge = JavaScriptBridge.get_interface("godotBridge")
		if godot_bridge:
			godot_bridge.setCallback(my_callback)
			print("Godot conectado ao JS")
		else:
			print("Objeto godotBridge não encontrado no JS")
	else:
		print("JavaScriptBridge não disponível (rodando fora do navegador)")
	
	levels_selection_screen = preload("res://scenes/main_screen/niveis_screen.tscn")
	student_name_screen = preload("res://scenes/general/student_name.tscn")
	
	# Loading levels table
	GlobalGameData.levels_table = JsonLoader.load_json_file(levels_table_path)
	printerr(levels_table_path)
	if not (GlobalGameData.levels_table is Array):
		printerr("MainScreen> Error loading levels.json: it is not an Array.")
		get_tree().quit()
	
	# Saving first level scene path if not set
	#if GlobalGameData.start_level_scene_path == "":
	
	
	# Printing levels table
	for item in GlobalGameData.levels_table:
		print("Level no: ", item["level_no"])
		print("Scene path: ", item["scene_path"])
	
func _on_jogar_pressed():
	get_tree().change_scene_to_file(GlobalGameData.start_level_scene_path)

func _on_sair_pressed():
	get_tree().quit()

func _on_niveis_pressed():
	get_tree().change_scene_to_packed(levels_selection_screen)
func _on_js_message(msg):
	var valor := str(msg[0])         # Garante que é string
	var index := int(valor.to_int())  # Converte para int

	# Atualiza o nível atual
	GlobalGameData.current_level = index

	# Atualiza o caminho da cena correta
	GlobalGameData.start_level_scene_path = GlobalGameData.levels_table[index - 1]["scene_path"]
	print(GlobalGameData.levels_table)
	print("Carregando level:", GlobalGameData.current_level, " | Cena:", GlobalGameData.start_level_scene_path)

	# Troca a cena
	get_tree().change_scene_to_file(GlobalGameData.start_level_scene_path)
