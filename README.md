# EASY TO READ STORY


- 一般書籍が読める
- 本を買うことができ、自分の本棚を作ることができる
- 決済にはStripeを使う

以下他サービスとの差別化点
- 物語の登場人物や時代など流れを理解しなければならない場合、それを要約して書いてくれる
- 文字の発言者IDを振り、自動音声に対応


## 技術スタック

Next.js


srs/
    app/
        (login)/
            mypage/
                page.tsx
        layout.tsx
        page.tsx
        middleware/
            auth.ts
    components/
        Auth/
            index.tsx