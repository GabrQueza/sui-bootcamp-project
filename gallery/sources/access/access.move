module gallery::access;

use gallery::admin::GalleryData;
use sui::coin::{Self, Coin};
use sui::sui::SUI;

public fun payAcess(gallery: &mut GalleryData, mut payment: Coin<SUI>, ctx: &mut TxContext) {
    assert!(coin::value<SUI>(&payment) >= gallery::admin::get_fee(gallery), 1);

    let mut amount = coin::split<SUI>(&mut payment, gallery::admin::get_fee(gallery), ctx);

    gallery::admin::handle_payment(gallery, amount, ctx);

    if (coin::value<SUI>(&payment) > 0) {
        transfer::public_transfer(payment, tx_context::sender(ctx));
    } else {
        coin::destroy_zero<SUI>(payment);
    }
}
