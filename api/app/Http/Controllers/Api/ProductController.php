<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product -> descripcion = $request -> descripcion;
        $product ->price = $request -> price;
        $product ->stock = $request -> stock;
        $product -> save();
    }

    public function show(string $id)
    {
        $product = Product::find($id);
        return $product;
    }

    public function update(Request $request, string $id)
    {
        $product = Product::find($request->id);
        $product -> descripcion = $request -> descripcion;
        $product ->price = $request -> price;
        $product ->stock = $request -> stock;
        $product -> save();
        return $product;
    }

    public function destroy(string $id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}
