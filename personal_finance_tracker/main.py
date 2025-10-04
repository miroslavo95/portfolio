import pandas as pd
import numpy as np

# --- Step 1: User Input ---
# Enter the exact filenames of your statements here.
# The files must be located in the 'data/raw/' folder.

revolut_filename = "account-statement_2025-08-01_2025-09-30_en-gb_39f816"
ing_filename = "NL96INGB0391488740_29-07-2025_03-10-2025"


# --- Step 2: Process Revolut Bank (csv) ---
print("Processing Revolut Bank...")
revolut_file_path = f'data/raw/{revolut_filename}.csv'
try:
    revolut_df = pd.read_csv(revolut_file_path)
    revolut_df = revolut_df.rename(columns={'Started Date': 'transaction_date', 'Description': 'description', 'Amount': 'amount', 'Type': 'type'})
    revolut_df['amount'] = revolut_df['amount'].astype(float)
    revolut_df['transaction_date'] = pd.to_datetime(revolut_df['transaction_date']).dt.strftime('%Y-%m-%d')
    revolut_df['source'] = 'revolut'
    revolut_df = revolut_df[['transaction_date', 'description', 'amount', 'type', 'source']]
except FileNotFoundError:
    print(f"❌ Error: Revolut CSV file not found at '{revolut_file_path}'")
    revolut_df = pd.DataFrame()


# --- Step 3: Process ING Bank (PDF) ---
print("Processing ING Bank...")
ing_file_path = f'data/raw/{ing_filename}.csv'
try:
    ing_df = pd.read_csv(ing_file_path)
    ing_df = ing_df.rename(columns={'Date':'transaction_date', 'Name / Description':'description', 'Debit/credit':'debit_credit', 'Amount (EUR)':'amount', 'Transaction type': 'type'})
    ing_df['amount'] = ing_df['amount'].str.replace(',', '.').astype(float)
    ing_df['amount'] = np.where(ing_df['debit_credit'] == 'Debit', ing_df['amount']*-1, ing_df['amount'])
    ing_df['transaction_date'] = pd.to_datetime(ing_df['transaction_date'], format='%Y%m%d').dt.strftime('%Y-%m-%d')
    ing_df['source'] = 'ing'
    ing_df = ing_df[['transaction_date', 'description', 'amount', 'type', 'source']]
except FileNotFoundError:
    print(f"❌ Error: ING CSV file not found at '{ing_file_path}'")
    ing_df = pd.DataFrame()

# --- Step 4: Combine and Finalize Data ---
print("Combining data...")
valid_dfs = [df for df in [revolut_df, ing_df] if not df.empty]

if valid_dfs:
    all_transactions_df = pd.concat(valid_dfs, ignore_index=True)
    all_transactions_df['transaction_date'] = pd.to_datetime(all_transactions_df['transaction_date'], dayfirst=False)
    all_transactions_df = all_transactions_df.sort_values(by='transaction_date', ascending=False)
    
    print("\n✅ Parsers complete. Here's a sample of your combined data:")
    print(all_transactions_df.head())
    print(f"\nTotal transactions processed: {len(all_transactions_df)}")
else:
    print("\n❌ No data was processed. Please check file names and parser logic.")










