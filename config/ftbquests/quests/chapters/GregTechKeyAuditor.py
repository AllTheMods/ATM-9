import re
import json
from collections import Counter

def mark_duplicates_in_file(input_file, output_file, json_file, ignore_keys):
    # JSONファイルからキーを読み込む
    with open(json_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
        json_keys = list(data.keys())

    # ファイルを読み込む
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 正規表現を使用してキーを抽出
    keys = re.findall(r'\{(atm9\.quest\.gregtech\..*?)\}', ''.join(lines))
    
    # 特定のキーを無視
    keys = [key for key in keys if key not in ignore_keys]

    # JSONファイルのキーと比較して重複を見つける
    duplicates = set(keys) & set(json_keys)

    # 出力用の行を生成
    output_lines = []
    for line in lines:
        # 重複するキーが含まれているかチェック
        modified_line = line
        for dup_key in duplicates:
            # 重複するキーにマーキングを追加
            modified_line = re.sub(r'(\{' + re.escape(dup_key) + r'\})', r'$$$' + r'\1', modified_line)
        output_lines.append(modified_line)

    # 変更された内容を新しいファイルに書き込む
    with open(output_file, 'w', encoding='utf-8') as file:
        file.writelines(output_lines)

# ファイルパス
input_file = '000.snbt'
output_file = '000_valid.snbt'
json_file = 'output.json'
ignore_keys = ['atm9.quest.gregtech.turbineCoils', 
               'atm9.quest.gregtech.subt.zpmSuperconductor',
               'atm9.quest.gregtech.subt.iv',
               'atm9.quest.gregtech.subt.luv',
               'atm9.quest.gregtech.magnetiteVein',
               'atm9.quest.gregtech.goethiteVein',
               'atm9.quest.gregtech.validOres']

# 関数を実行
mark_duplicates_in_file(input_file, output_file, json_file, ignore_keys)