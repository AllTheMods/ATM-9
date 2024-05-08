import re
from collections import Counter

def mark_duplicates_in_file(input_file, output_file, ignore_keys):
    # ファイルを読み込む
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 正規表現を使用してキーを抽出
    keys = re.findall(r'\{(atm9\.quest\.gregtech\..*?)\}', ''.join(lines))
    
    # 特定のキーを無視
    keys = [key for key in keys if key not in ignore_keys]

    # キーの出現回数をカウント
    key_counts = Counter(keys)
    
    # 重複するキーを見つける
    duplicates = {key for key, count in key_counts.items() if count > 1}

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
ignore_keys = ['atm9.quest.gregtech.turbineCoils', 
               'atm9.quest.gregtech.subt.zpmSuperconductor',
               'atm9.quest.gregtech.subt.iv',
               'atm9.quest.gregtech.subt.luv']
# 関数を実行
mark_duplicates_in_file(input_file, output_file, ignore_keys)