import re
import json

# 入力ファイルと出力ファイルのパス
input_file_path = '000.asnbt'
output_file_path = '000_modified.snbt'
json_output_path = 'output.json'

# ファイルを読み込む
with open(input_file_path, 'r', encoding='utf-8') as file:
    lines = file.readlines()

# 出力用のデータを準備
modified_lines = []
extracted_data = {}

# 各行を処理
for line in lines:
    # キーと値を抽出する正規表現
    match = re.search(r'({atm9\.quest\.gregtech\..+?})→→→(.+?)←←←', line)
    if match:
        key = match.group(1)
        value = match.group(2)
        # 波括弧を除去
        clean_key = key.strip('{}')
        # JSON用のディクショナリに追加
        extracted_data[clean_key] = value
        # 修正された行を追加（キーのみ）
        modified_line = re.sub(r'→→→.+?←←←', '', line)
        modified_lines.append(modified_line)
    else:
        modified_lines.append(line)

# 修正された内容を新しいファイルに書き込む
with open(output_file_path, 'w', encoding='utf-8') as file:
    file.writelines(modified_lines)

# JSONデータをファイルに書き込む
with open(json_output_path, 'w', encoding='utf-8') as json_file:
    json.dump(extracted_data, json_file, ensure_ascii=False, indent=4)